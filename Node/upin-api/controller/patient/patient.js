var generators = require("../../helper/generators.js");
var jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
var password = require("../../helper/password.js");
var sendMail = require('../../helper/sendMail.js');
var send_sms = require('../../helper/send_sms.js');

var patientValidator = require('../../validator/patient.js');

module.exports = function (db) {


    return {
        addPatient: function (req, res) {
            req.checkBody(patientValidator);
            if (!req.validateAndRespond()) return;
            var patientData = req.body.patient;
            var firstName = patientData.firstName;
            var lastName = patientData.lastName;
            var dob = new Date(req.body.dob);
            try {
                var upin = generators.upinGenerator(firstName, lastName, dob)
            } catch (e) {
                console.log(e);
                return res.send({
                    err: true,
                    error: "firstName, lastName, dob must be valid"
                });
            }
            patientData.upin = upin;
            var datenow = new Date();
            patientData.updatedOn = datenow; //record inserted date
            patientData.isActive = false;        //initially patient is inactive 
            ///OTP///
            var speakeasy = require('speakeasy');
            var secret = speakeasy.generateSecret({ length: 20 });
            console.log(secret.base32); // secret of length 20
            var otp = speakeasy.totp({
                secret: secret.base32,
                encoding: 'base32'
            });
            patientData.otp = otp;
            ///


            password.hashPassword(patientData.password, function (_password) {
                console.log(_password);
                var _token = patientData.email + patientData.password;
                patientData.token = jwt.sign(_token, (new Date()).toString());
                patientData.password = _password;
                console.log(patientData);
                db.collection('patients').insertOne(patientData, function (err, result) {
                    if (err) {
                        return res.send({
                            err: true,
                            error: err
                        });
                    }
                    else {
                        sendMail.Send_Email(patientData.email, 'Welcome', 'email_body_welcome', patientData).then(function (data) {
                            res.send({
                                err: false,
                                result: result
                            });
                        });

                    }
                });
            })
        },
        getPatient: function (req, res) {
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;

            db.collection('patients').findOne({ upin: upin }, { password: 0, _id: 0 }, function (err, result) {
                if (result == null) {
                    return res.send({
                        err: true,
                        error: "No patient found with given upin"
                    });
                } else {
                    res.send({
                        err: false,
                        result: {
                            patient: result
                        }
                    });
                }
            });
        },
        patientLogin: function (req, res) {
            req.checkBody({
                'patient.password': {
                    notEmpty: true
                },
                'patient.email': {
                    notEmpty: true
                }
            });
            if (!req.validateAndRespond()) return;
            var email = req.body.patient.email;
            db.collection('patients').findOne({ email: email }, function (err, patient) {
                if (patient == null) {
                    return res.send({
                        err: true,
                        error: ["email doesn't exist"]
                    });
                }
                else {
                    if (patient.isActive == false) {
                        res.status(401).json({
                            err: true,
                            error: ["Not Activated"]
                        })

                    }
                    bcrypt.compare(req.body.patient.password, patient.password, function (err, result) {
                        console.log("Bcrypt returns: " + result);
                        if (err) {
                            res.status(501).json({
                                err: false,
                                error: ["Server error"]
                            });
                        } else {
                            if (result) {
                                console.log(result);
                                res.json({
                                    err: false,
                                    result: { token: patient.token, upin: patient.upin }
                                });
                            } else {
                                res.status(401).json({
                                    err: true,
                                    error: ["Invalid email/password combination"]
                                })
                            }
                        }

                    })
                }
            });
        },
        updatePatient: function (req, res) {
            var auditTrail = require('../../helper/auditTrail.js')(db);
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;

            db.collection('patients').findOne({ upin: upin }, { password: 0 }, function (err, result) {
                if (result == null) {
                    return res.send({
                        err: true,
                        error: "No patient found with given upin"
                    });
                } else {
                    auditTrail.SaveTrail(result, 'patients', function (err, result) {
                        if (err) {
                            return res.send({
                                err: true,
                                error: err
                            });
                        }
                        else {
                            var patientData = req.body.patient;
                            var datenow = new Date();
                            patientData.updatedOn = datenow;
                            db.collection('patients').update({ upin: upin }, { $set: patientData }, function (err, result) {
                                if (err) {
                                    return res.send({
                                        err: true,
                                        error: err
                                    });
                                } else {
                                    return res.send({
                                        err: false,
                                        result: result
                                    });
                                }
                            });
                        }
                    });


                }
            });
        },
        patientActivate: function (req, res) {
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;
            var otp = req.body.otp;
            db.collection('patients').findOne({ upin: upin, otp: otp }, function (err, result) {
                if (result == null) {
                    return res.send({
                        err: true,
                        error: "Invalid OTP Presented.Please try again"
                    });
                } else {

                    db.collection('patients').update({ upin: upin }, { $set: { "isActive": true } }, function (err, result) {
                        if (err) {
                            return res.send({
                                err: true,
                                error: err
                            });
                        } else {
                            return res.send({
                                err: false,
                                result: result
                            });
                        }
                    });
                }
            });
        },
        forgotPassword: function (req, res) {
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;
            var patientData = req.body;
            ///OTP///
            var speakeasy = require('speakeasy');
            var secret = speakeasy.generateSecret({ length: 20 });

            var otp = speakeasy.totp({
                secret: secret.base32,
                encoding: 'base32'
            });
            patientData.otp = otp;
            ///
            db.collection('patients').update({ upin: upin }, { $set: { "otp": otp } }, function (err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                    sendMail.Send_Email(patientData.email, 'Forgot Password', 'email_body_forgot', patientData).then(function (data) {
                        res.send({
                            err: false,
                            result: data
                        });
                    });

                }
            });


        },
        ChangePassword: function (req, res) {
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;
            var otp = req.body.otp;
            var Newpassword = req.body.password;
            var conf_password = req.body.confPassword;
            if(Newpassword !== conf_password){
                  return res.send({
                        err: true,
                        error: "Password and confirm password do not match."
                    });
                
            }
            db.collection('patients').findOne({ upin: upin, otp: otp }, function (err, result) {
                if (result == null) {
                    return res.send({
                        err: true,
                        error: "Invalid OTP Presented.Please try again"
                    });
                } else {
                    password.hashPassword(Newpassword, function (_password) {

                        db.collection('patients').update({ upin: upin }, { $set: { "password": _password } }, function (err, result) {
                            if (err) {
                                return res.send({
                                    err: true,
                                    error: err
                                });
                            } else {
                                return res.send({
                                    err: false,
                                    result: result
                                });
                            }
                        });
                    });

                }
            });
        },
        forgotPasswordSMS: function (req, res) {
            req.checkParams('upin', 'upin must exist').notEmpty();
            if (!req.validateAndRespond()) return;
            var upin = req.params.upin;
            var patientData = req.body;
            ///OTP///
            var speakeasy = require('speakeasy');
            var secret = speakeasy.generateSecret({ length: 20 });

            var otp = speakeasy.totp({
                secret: secret.base32,
                encoding: 'base32'
            });
            patientData.otp = otp;
            ///
            db.collection('patients').update({ upin: upin }, { $set: { "otp": otp } }, function (err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                    send_sms.sendSMS(patientData.mobile,patientData.otp).then(function (data) {
                        console.log(data);
                        res.send({
                            err: false,
                            result:data
                        });
                    });

                }
            });


        }


    }
}
