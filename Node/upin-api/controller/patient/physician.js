var physicianValidator = require('../../validator/patient_validator/physician.js'); 
var guid = require("guid")

module.exports = function(db){
  return {
    getPhysician: function(req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin}, { physician: 1, _id: 0 }, function(err, result) {
        if(err) {
          return res.send({
            err: true,
            error: err
          });
        }else{
          return res.send({
            err: false,
            result: result
          });
        }
      });
    },
    addPhysician: function(req, res) {
      req.checkBody(physicianValidator);
      if(!req.validateAndRespond()) return;
      var upin = req.params.upin;

      var physician = req.body.physician;
      physician.id = guid.raw();
      db.collection('patients').update({ upin: upin }, { $push: { physician : physician } }, function(err, result){
        if(err) { 
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
    },
    updatePhysician: function (req, res) {
      
      req.checkBody(physicianValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var physician = req.body.physician;

      db.collection('patients').update({ upin: upin }, { $pull: { physician: { id: physician.id }  } }, function (err, result) {
        if (err) {
          return res.send({
            err: true,
            error: err
          });
        } else {
          db.collection('patients').update({ upin: upin }, { $push: { physician: physician } }, function (err, result) {

            return res.send({
              err: false,
              result: result
            });
          });

        }

      });
    }
  }
}
