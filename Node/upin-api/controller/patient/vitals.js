var vitalsValidator = require('../../validator/patient_validator/vitals.js');
var guid = require("guid");
module.exports = function (db) {
  return {
    getVitals: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { vitals: 1, _id: 0 }, function (err, result) {
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
    addVitals: function (req, res) {
      req.checkBody(vitalsValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var vital = req.body.vitals;
      vital.id = guid.raw();
      vital.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { vitals: vital } }, function (err, result) {
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
    updateVitals: function (req, res) {
      req.checkBody(vitalsValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var vital = req.body.vitals;
      vital.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { vitals: { id: vital.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {

            db.collection('patients').update({ upin: upin }, { $push: { vitals: vital } }, function (err, result) {
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
