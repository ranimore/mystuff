
var medicineValidator = require('../../validator/patient_validator/medicine.js');
var guid = require("guid");
module.exports = function (db) {
  return {
    getMedicines: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { medicines: 1, _id: 0 }, function (err, result) {
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
    addMedicine: function (req, res) {
      req.checkBody(medicineValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var medicine = req.body.medicine;
      medicine.id = guid.raw();
      medicine.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { medicines: medicine } }, function (err, result) {
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
    updateMedicine: function (req, res) {
      req.checkBody(medicineValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var medicine = req.body.medicine;
      medicine.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { medicines: { id: medicine.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {
            db.collection('patients').update({ upin: upin }, { $push: { medicines: medicine } }, function (err, result) {

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
