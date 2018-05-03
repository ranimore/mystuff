var insuranceValidator = require('../../validator/patient_validator/insurance.js');
var guid = require("guid")

module.exports = function (db) {
  return {
    getInsurance: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { insurance: 1, _id: 0 }, function (err, result) {
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
    addInsurance: function (req, res) {
      console.log("Here");
      console.log(insuranceValidator);
      req.checkBody(insuranceValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var insurance = req.body.insurance;
      insurance.id = guid.raw();
      insurance.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { insurance: insurance } }, function (err, result) {
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

    updateInsurance: function (req, res) {

      req.checkBody(insuranceValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var insurance = req.body.insurance;
      insurance.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { insurance: { id: insurance.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {
            db.collection('patients').update({ upin: upin }, { $push: { insurance: insurance } }, function (err, result) {

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
