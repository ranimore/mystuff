var ObjectId = require('mongodb').ObjectID;
var bugReportValidator = require('../validator/bugreport.js');

module.exports = function(db){
  return {
    getBugReportByID: function(req, res){
      var id = req.params.id;
      db.collection('bugReport').findOne({_id: new ObjectId(id)}, function(err, result){
        if(err){
          return res.send({
            err: true, 
            error: err
          });
        }
        if(result){
          res.send({
            err: false,
            result:result 
          });
        }else {
          res.send({
            err: true, 
            error: "bugReport doesn't exist"
          });
        }
      })
    },
    getBugReport: function(req, res){
      db.collection('bugReport').find().toArray(function(error,result){
        if(error){
          res.send({
            err: true, 
            error: error
          });
        }else{
          res.send({
            err: false,
            result:result 
          });
        }
      })
    },
    addBugReport: function(req, res){
      req.checkBody(bugReportValidator);
      if(!req.validateAndRespond()) return;
      var bugReportJson = req.body.bugReport;
      db.collection('bugReport').insertOne(bugReportJson, function(error, result){
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
  }
}
