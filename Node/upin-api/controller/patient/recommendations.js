module.exports = function(db){
  return {
    getRecommendations: function(req, res) {
      var upin = req.params.upin;
      db.collection('patients').findOne({ upin: upin}, { recommendations : 1, _id: 0 }, function(err, result) {
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
    addRecommendation: function(req, res) {
      var upin = req.params.upin;
      var recommendation = req.body.recommendation;
      db.collection('patients').update({ upin: upin }, { $push: { recommendations : recommendation } }, function(err, result){
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
