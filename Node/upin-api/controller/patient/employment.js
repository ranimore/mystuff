var employmentValidator = require('../../validator/patient_validator/employment.js');
var guid = require("guid");
module.exports = function (db) {
  return {
    getEmployment: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { employment: 1, _id: 0 }, function (err, result) {
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
    addEmployment: function (req, res) {
      req.checkBody(employmentValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var employment = req.body.employment;
      employment.id = guid.raw();
      employment.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { employment: employment } }, function (err, result) {
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
    updateEmployment: function (req, res) {
      req.checkBody(employmentValidator);
      if (!req.validateAndRespond()) return;
      var upin = req.params.upin;
      var employment = req.body.employment;
      employment.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { employment: { id: employment.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {
            db.collection('patients').update({ upin: upin }, { $push: { employment: employment } }, function (err, result) {

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
