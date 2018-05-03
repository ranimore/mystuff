var videoValidator = require('../validator/video.js');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(db){
  return {
    getVideoById: function(req, res){
      var id = req.params.id;
      db.collection('video').findOne({_id: new ObjectId(id)}, function(err, result){
        if(err){
          return res.send({
            err: true, 
            error: err
          });
        }
        if(result){
          res.send({
            err: false,
            result:result 
          });
        }else {
          res.send({
            err: true, 
            error: "video doesn't exist"
          });
        }
      });
    },
    getAllVideos: function(req, res){
      db.collection('video').find().toArray(function(error,result){
        if(error){
          res.send({
            err: true, 
            error: error
          });
        }else{
          res.send({
            err: false,
            result:result 
          });
        }
      });
    },
    updateVideos: function (req, res) {
            req.checkBody(videoValidator);
            if (!req.validateAndRespond()) return;
            var Json = req.body.video;
            var id=  Json._id;
            delete Json._id;
            db.collection('video').updateOne({ _id: ObjectId(id) }
                , { $set: Json }, function (error, result) {
                    if (error) {
                        return res.send({
                            err: true,
                            error: error
                        });
                    }
                    return res.send({   
                        err: false,
                        result: result
                    });
                });
        },
    addVideo: function(req, res){
      req.checkBody(videoValidator);
      if(!req.validateAndRespond()) return;
      var videoJson = req.body.video;
      db.collection('video').insertOne(videoJson, function(error, result){
        if(error){
          return res.send({
            err: true,
            error: error
          });
        }
        return res.send({
          err: false,
          result: result
        });
      });
    }
  };
};
