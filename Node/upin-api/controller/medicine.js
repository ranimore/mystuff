var medicineValidator = require('../validator/medicine.js');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(db){
  return {
    getMedicineById : function(req, res){
      req.check('id', 'Must exist');
      if(!req.validateAndRespond()) return;
      var id = req.params.id;
      db.collection('medicine').find({_id: new ObjectId(id)}).toArray(function(error,medicine){
        if(error){
          res.send({
            err: true, 
            error: error
          });
        }else{
          res.send({
            err: false,
            result: medicine
          });
        }
      });
    },
    addMedicine : function(req, res){
      req.checkBody(medicineValidator);
      if(!req.validateAndRespond()) return;
      var medicineJson = req.body.medicine;
      db.collection('medicine').insertOne(medicineJson, function(error, result){
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
    },
    updateMedicine: function (req, res) {
            req.checkBody(medicinesValidator);
            if (!req.validateAndRespond()) return;
            var Json = req.body.medicine;
            var id=  Json._id;
            delete Json._id;
            db.collection('medicine').updateOne({ _id: ObjectId(id) }
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
    getAllMedicines: function(req, res){
      db.collection('medicine').find().toArray(function(error,medicine){
        if(error){
          res.send({
            err: true, 
            error: error
          });
        }else{
          res.send({
            err: false,
            result: medicine
          });
        }
      });
    }
  };
};
