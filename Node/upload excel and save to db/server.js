var mongoXlsx = require('mongo-xlsx');
var model = null;
mongoXlsx.xlsx2MongoData("./demo.xlsx", model, function(err, mongoData) {
    console.log('Mongo data:', mongoData);
});