var MongoClient = require("mongodb").MongoClient;
var _ = require("lodash");

var assert = require("assert");

var url = 'mongodb://admin:admin@ds135234.mlab.com:35234/kanbanboard';

module.exports = function(callback) {
    console.log("here");
    MongoClient.connect(url, function(err, db) {
        if (err) return callback(err, db);
        else {

            callback(err, db);
        }

    })
}