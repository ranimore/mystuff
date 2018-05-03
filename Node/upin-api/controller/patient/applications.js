var applicationValidator = require('../../validator/patient_validator/application.js');

module.exports = function(db){
  return {
    getApplications: function(req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin}, { applications: 1, _id: 0 }, function(err, result) {
        if(err) return res.send(err);
        else return res.send(result);
      });
    },
    addApplication: function(req, res) {
      var upin = req.params.upin;
      req.checkBody(applicationValidator);
      if(!req.validateAndRespond()) return;
      var application = req.body.application;
      db.collection('patients').update({ upin: upin }, { $push: { applications : application } }, function(err, result){
        if(err) return res.send(err);
        else return res.send(result);
      });
    }
  }
}
