var bcrypt = require('bcryptjs');
var password = require("../helper/password.js");
var ObjectId = require('mongodb').ObjectID;

const uuidv1 = require('uuid/v1');
module.exports = function(db) {
    return {
        addUser: function(req, res) {

            var userData = req.body.user;
            // userData.boards = [];
            password.hashPassword(userData.password, function(_password) {

                userData.password = _password;
                db.collection('users').insertOne(userData, function(err, result) {
                    console.log(err);
                    if (err) {
                        return res.send({
                            err: true,
                            error: err
                        });
                    } else {
                        res.send({
                            err: false,
                            result: result
                        });
                    }
                });
            });
        },

        userLogin: function(req, res) {

            var email = req.body.user.email;
            db.collection('users').findOne({ email: email }, function(err, user) {
                if (user === null) {
                    return res.send({
                        err: true,
                        error: ["email doesn't exist"]
                    });
                } else {
                    bcrypt.compare(req.body.user.password, user.password, function(err, result) {
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
                                    result: { id: user._id }
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
        getuser: function(req, res) {
            db.collection('users').find({ $text: { $search: req.body.email } }, { password: 0 }).toArray(function(err, result) {

                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                    res.send({
                        err: false,
                        result: result
                    });
                }
            });
        },
        createboard: function(req, res) {
            db.collection('users').findOne({ "_id": new ObjectId(req.params.id) }, { password: 0 }, function(err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: "..user not found!"
                    });
                } else {
                    var boarddata = {};
                    var datenow = new Date();
                    //boarddata.updatedOn = datenow;
                    // boarddata.userid = req.params.id;
                    // boarddata.users = [];
                    //boarddata.users.push({ id: req.params.id });
                    //  boarddata.uid = uuidv1();
                    //  boarddata.lists[0].uid = uuidv1();

                    boarddata.ProjectId = req.body.ProjectId;
                    boarddata.SubProjectId = req.body.SubProjectId;
                    boarddata.CompanyId = req.body.CompanyId;
                    boarddata.CompanyProjectBoardId = uuidv1();
                    boarddata.Json = req.body.Json;
                    boarddata.BoardName = req.body.BoardName;
                    db.collection('Companyboards').insertOne(boarddata, function(err, result) {
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
        getallboard: function(req, res) {
            db.collection('Companyboards').find({}).toArray(function(err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        result: err
                    });
                } else {
                    return res.send({
                        err: false,
                        result: result
                    });
                }
            })
        },
        getboarddetails: function(req, res) {

            db.collection('Companyboards').find({ $and: [{ CompanyProjectBoardId: req.query.CompanyProjectBoardId }, { CompanyId: Number(req.query.CompanyId) }, { ProjectId: Number(req.query.ProjectId) }, { SubProjectId: Number(req.query.SubProjectId) }] }).toArray(function(err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        result: err
                    });
                } else {
                    return res.send({
                        err: false,
                        result: result
                    });
                }
            })
        },
        updateborad: function(req, res) {

            db.collection('Companyboards').update({ $and: [{ CompanyProjectBoardId: req.body.CompanyProjectBoardId }, { CompanyId: Number(req.body.CompanyId) }, { ProjectId: Number(req.body.ProjectId) }, { SubProjectId: Number(req.body.SubProjectId) }] }, { $set: { Json: req.body.Json } }, function(err, result) {
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

    }
};