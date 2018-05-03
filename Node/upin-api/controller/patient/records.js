module.exports = function(db){
  return {
    getRecords: function(req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin}, { records : 1, _id: 0 }, function(err, result) {
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
    addRecord: function(req, res) {
      var upin = req.params.upin;
      var record = req.body.record;
      db.collection('patients').update({ upin: upin }, { $push: { records : record } }, function(err, result){
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
    }
  }
}
