var express = require("express");
var app = express();
var port = process.env.PORT || 3000
require("./config/express.js")(app);

require("./config/mongo.js")(function(err, db) {
    if (err) throw err;

    require("./routes/user.js")(db, app);
    app.listen(port);
    console.log("Application listening on port :" + port);
});

module.exports = app;