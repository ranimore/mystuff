
/*exports.GetTrail = function (db , collectionName , predicate , callback) {
	collectionName  = collectionName + "_AuditTrail";

     db.collection(collectionName).find(predicate).toArray(function(error,result){
        if(error){
        
       		callback(error , null);
        }else{
          	callback(null , result)
        }
      })

}*/
module.exports = function (db) {
   /**
 * Gets the Audit trails.
 * @param {dbContext} db - The db context of MongoDB driver 
 * @param {string} collectionName - The collectionName to save function 
 * @param {object} predicate - The where condition 
 * @param {function} callback  - The callback function After same
 */
   var  GetTrail = function (req, res) {

      var mongodb = require('mongodb');
      var ObjectID = mongodb.ObjectId;
      collectionName = req.params.for + "_AuditTrail";
      predicate = ObjectID(req.params.docId);
      db.collection(collectionName).find({ DBID: predicate }).toArray(function (error, result) {
        if (error) {
          return res.send({
            err: true,
            error: error
          });

        } else {
          res.send({
            err: false,
            result: result
          });
        }
      })

    }
    /**
     * Saves the Audit trails.
     * @param {dbContext} db - The db context of MongoDB driver 
     * @param {object} object - The object to Save to the database
     * @param {string} collectionName - The collectionName to save function 
     * @param {function} callback  - The callback function After same
     */
   var  SaveTrail = function (object, collectionName, callback) {
      collectionName = collectionName + "_AuditTrail";
      object.DBID = object._id;
      delete object._id;
      db.collection(collectionName).insertOne(object, function (error, result) {
        if (error) {
          callback({
            err: true,
            error: error
          }, null)
        }
        callback(null, {
          err: false,
          result: result
        });
      });
    }
  var    SavePatient = function (upin , callback) {
      db.collection('patients').findOne({ upin: upin }, { password: 0 }, function (err, result) {
        if (result == null) {
          return res.send({
            err: true,
            error: "No patient found with given upin"
          });
        } else {
          SaveTrail(result, 'patients', function (err, result) {
              if(err){
                callback(err , null)
              }else{
                callback(null, result)
              }
          });

        }
      });
    }

  return {
      GetTrail : GetTrail,
      SaveTrail : SaveTrail,
      SavePatient : SavePatient
  }
}



