var allergyValidator = require('../../validator/patient_validator/allergy.js');
var guid = require("guid");
module.exports = function (db) {
  return {
    getAllergies: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { allergies: 1, _id: 0 }, function (err, result) {
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
    },
    addAllergy: function (req, res) {
      req.checkBody(allergyValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;

      var allergy = req.body.allergy;
      allergy.id = guid.raw();
      allergy.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { allergies: allergy } }, function (err, result) {
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
    },
    updateAllergy: function (req, res) {
      req.checkBody(allergyValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var auditTrail = require('../../helper/auditTrail.js')(db);
       auditTrail.SavePatient(upin, function(err , result){

      var allergy = req.body.allergy;
      allergy.UpdatedOn = new Date();
     
      
      db.collection('patients').update({ upin: upin }, { $pull: { allergies: { id: allergy.id } } }, function (err, result) {
        if (err) {
          return res.send({
            err: true,
            error: err
          });
        } else {

          db.collection('patients').update({ upin: upin }, { $push: { allergies: allergy } }, function (err, result) {
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
    });
      
    }
  }
}
