var jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
var password = require("../helper/password.js");
var ObjectId = require('mongodb').ObjectID;
var sendMail = require('../helper/sendMail.js');
var send_sms = require('../helper/send_sms.js');
var userValidator = require('../validator/user.js');

module.exports = function(db){
  return {
    addUser : function(req, res){
      req.checkBody(userValidator);
      if(!req.validateAndRespond()) return;
      var userData = req.body.user;

      password.hashPassword(userData.password, function(_password){
        console.log(_password);
        var _token = userData.email + userData.password ;
        userData.token = jwt.sign(_token, (new Date()).toString());
        userData.password = _password;
        db.collection('users').insertOne( userData , function(err, result){
          console.log(err);
          if(err) { 
            return res.send({
              err: true,
              error: err
            }); 
          }
          else {
            res.send({
              err: false,
              result: result
            });
          }
        });
      });
    },
    getUser : function(req, res) {
      req.checkParams('id', 'id must exist').notEmpty();
      if(!req.validateAndRespond()) return;
      var id = req.params.id;
      db.collection('users').findOne({ _id: new ObjectId(id) }, { password: 0, _id: 0 }, function(err, result){
        if(result === null) {
          return res.send({
            err: true,
            error: "user not found with given id"
          });
        } else{
          res.send({
            err: false,
            result: {
              user: result
            }
          });
        }
      });
    },
    userLogin: function(req, res) {
      req.checkBody({
        'user.password': {
          notEmpty: true
        },
        'user.email': {
          notEmpty: true
        }
      });
      if(!req.validateAndRespond()) return;
      var email = req.body.user.email;
      db.collection('users').findOne({ email: email }, function(err, user){
        if(user === null) {
          return res.send({
            err: true,
            error: ["email doesn't exist"]
          });
        }
        else {
          bcrypt.compare(req.body.user.password, user.password, function (err, result) {
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
                  result: {token: user.token, upin: user.upin}
                });
              } else {
                res.status(401).json({
                  err: true,
                  error: ["Invalid email/password combination"]
                });
              }
            }
          });
        }
      });
    },
    forgotpassword:function(req,res){
       
            if (!req.validateAndRespond()) return;
            var id = req.params.id;
            var UserData = req.body;
            ///OTP///
            var speakeasy = require('speakeasy');
            var secret = speakeasy.generateSecret({ length: 20 });

            var otp = speakeasy.totp({
                secret: secret.base32,
                encoding: 'base32'
            });
           UserData.otp = otp;
            ///
            db.collection('users').update({ _id: new ObjectId(id) }, { $set: { "otp": otp } }, function (err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                    sendMail.Send_Email(UserData.email, 'Forgot Password', 'email_body_forgot', UserData).then(function (data) {
                        res.send({
                            err: false,
                            result: data
                        });
                    });

                }
            });
    },
     forgotpasswordSMS:function(req,res){
             if (!req.validateAndRespond()) return;
            var id = req.params.id;
            var UserData = req.body;
            ///OTP///
            var speakeasy = require('speakeasy');
            var secret = speakeasy.generateSecret({ length: 20 });

            var otp = speakeasy.totp({
                secret: secret.base32,
                encoding: 'base32'
            });
           UserData.otp = otp;
            ///
            db.collection('users').update({ _id: new ObjectId(id) }, { $set: { "otp": otp } }, function (err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                     send_sms.sendSMS(UserData.mobile,UserData.otp).then(function (data) {
                        res.send({
                            err: false,
                            result: data
                        });
                    });

                }
            });
     },
      ChangePassword: function (req, res) {
            if (!req.validateAndRespond()) return;
            var id = req.params.id;
           
            var otp = req.body.otp;
            var Newpassword = req.body.password;
            var conf_password = req.body.confPassword;
            if(Newpassword !== conf_password){
                  return res.send({
                        err: true,
                        error: "Password and confirm password do not match."
                    });
                
            }
            db.collection('users').findOne({  _id: new ObjectId(id) , otp: otp }, function (err, result) {
                if (result == null) {
                    return res.send({
                        err: true,
                        error: "Invalid OTP Presented.Please try again"
                    });
                } else {
                    password.hashPassword(Newpassword, function (_password) {

                        db.collection('users').update({ _id: new ObjectId(id) }, { $set: { "password": _password } }, function (err, result) {
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
        }
  };
};
