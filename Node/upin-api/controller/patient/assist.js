module.exports = function(db){
  return {
    getAssists: function(req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin}, { assists : 1, _id: 0 }, function(err, result) {
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
    addAssist: function(req, res) {
      var upin = req.params.upin;
      var assist = req.body.assist;
      db.collection('patients').update({ upin: upin }, { $push: { assists : assist } }, function(err, result){
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
