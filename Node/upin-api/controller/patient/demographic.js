var demographicValidator = require('../../validator/patient_validator/demographic.js');
var guid = require("guid");

module.exports = function (db) {
  return {
    getDemographics: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { demographics: 1, _id: 0 }, function (err, result) {
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

    addDemographics: function (req, res) {
      req.checkBody(demographicValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var demographics = req.body.demographic;//remove 's from demographics
      demographics.id = guid.raw();
      demographics.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { demographics: demographics } }, function (err, result) {
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

    updateDemographics: function (req, res) {
      req.checkBody(demographicValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var demographic = req.body.demographic;
      demographic.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { demographics: { id: demographic.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {
            db.collection('patients').update({ upin: upin }, { $push: { demographics: demographic } }, function (err, result) {

              return res.send({
                err: false,
                result: result
              });
            });
          }
        });
      });
    }
  }
}
