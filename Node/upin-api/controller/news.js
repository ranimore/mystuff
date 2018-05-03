var newsValidator = require('../validator/news.js');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(db){
  return {
    getNewsById: function(req, res){
      var id = req.params.id;
      db.collection('news').findOne({_id: new ObjectId(id)}, function(err, result){
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
            error: "news doesn't exist"
          });
        }
      })
    },
    updateNews: function (req, res) {
            req.checkBody(newsValidator);
            if (!req.validateAndRespond()) return;
            var Json = req.body.news;
            var id=  Json._id;
            delete Json._id;
            db.collection('news').updateOne({ _id: ObjectId(id) }
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
    getAllNews: function(req, res){
      db.collection('news').find().toArray(function(error,result){
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
    addNews: function(req, res){
      req.checkBody(newsValidator);
      if(!req.validateAndRespond()) return;
      var newsJson = req.body.news;
      db.collection('news').insertOne(newsJson, function(error, result){
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
