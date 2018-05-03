var ObjectId = require('mongodb').ObjectID;
var slideValidator = require('../validator/slide.js');

module.exports = function(db){
  return {
    getSlide: function(req, res){
      var id = req.params.id;
      db.collection('slide').findOne({_id: new ObjectId(id)}, function(err, result){
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
            error: "slide doesn't exist"
          });
        }
      })
    },
    getSlides: function(req, res){
      db.collection('slide').find().toArray(function(error,result){
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
      })
    },
    updateSlides: function (req, res) {
            req.checkBody(slideValidator);
            if (!req.validateAndRespond()) return;
            var Json = req.body.slide;
            var id=  Json._id;
            delete Json._id;
            db.collection('slide').updateOne({ _id: ObjectId(id) }
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
    addSlide: function(req, res){
      req.checkBody(slideValidator);
      if(!req.validateAndRespond()) return;
      var slideJson = req.body.slide;
      db.collection('slide').insertOne(slideJson, function(error, result){
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
  }
}
