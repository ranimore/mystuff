
var guid = require("guid");
module.exports = function (db) {
  return {
    getAppointments: function (req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin }, { appointments: 1, _id: 0 }, function (err, result) {
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
    addAppointment: function (req, res) {
      var upin = req.params.upin;
      var appointment = req.body.appointment;
      appointment.id = guid.raw();
      appointment.UpdatedOn = new Date();
      db.collection('patients').update({ upin: upin }, { $push: { appointments: appointment } }, function (err, result) {
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
    updateAppointment: function (req, res) {
      var upin = req.params.upin;
      var appointment = req.body.appointment;
      appointment.UpdatedOn = new Date();
      var auditTrail = require('../../helper/auditTrail.js')(db);
      auditTrail.SavePatient(upin, function (err, result) {
        db.collection('patients').update({ upin: upin }, { $pull: { appointments: { id: appointment.id } } }, function (err, result) {
          if (err) {
            return res.send({
              err: true,
              error: err
            });
          } else {
            db.collection('patients').update({ upin: upin }, { $push: { appointments: appointment } }, function (err, result) {

              return res.send({
                err: false,
                result: result
              });
            });
          }
        });
      });
    }
  };
};
