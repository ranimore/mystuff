applicationValidator = require('../validator/application.js');

var ObjectId = require('mongodb').ObjectID;
module.exports = function(db){

  return {
    getApplicationById: function(req, res){
      var id = req.params.id;
      db.collection('application').findOne({_id: new ObjectId(id)}, function(err, application){
        if(err){
          return res.send({
            err: true, 
            error: err
          });
        }
        if(application){
          res.send({
            err: false,
            result: application
          });
        }else {
          res.send({
            err: true, 
            error: "Application doesn't exist"
          });
        }
      });
    },
    getAllApplications: function(req, res){
      db.collection('application').find().toArray(function(error,applications){
        if(error){
          res.send({
            err: true, 
            error: error
          });
        }else{
          res.send({
            err: false,
            result: applications
          });
        }
      });
    },
    updateApplication: function (req, res) {
            req.checkBody(applicationValidator);
            if (!req.validateAndRespond()) return;
            var Json = req.body.application;
            var id=  Json._id;
            delete Json._id;
            db.collection('application').updateOne({ _id: ObjectId(id) }
                , { $set: Json }, function (error, result) {
                    if (error) {
                        return res.send({
                            err: true,
                            error: error
                        });
                    }
                    return res.send({   
                        err: false,
                        result: result
                    });
                });
        },
    addApplication: function(req, res){
      req.checkBody(applicationValidator);
      if(!req.validateAndRespond()) return;
      var applicationJson = req.body.application;
      db.collection('application').insertOne(applicationJson, function(error, result){
        if(error){
          return res.send({
            err: true,
            error: error
          });
        }
        return res.send({
          err: false,
          result: result
        });
      });
    }
  };
};
