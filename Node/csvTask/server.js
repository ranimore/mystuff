var HereMapsAPI = require('node-heremaps').default;
var config = {
    app_id: 'NTZomXH3rJkksgt3q3Yp',
    app_code: 'T5y6LrQXhMs4YbPZ0iX1Iw',
};
var hmAPI = new HereMapsAPI(config);

var port = process.env.port || 1337;
var csv = require("fast-csv");

var Q = require('Q');





var fs = require('fs');


var csv1 = require('ya-csv');

var w = csv1.createCsvStreamWriter(fs.createWriteStream('output.csv'));
var d = [];

var stream = fs.createReadStream("input.csv");

var csvdata = [];
WriteHeader();

csv
    .fromStream(stream, { headers: true })
    .on("data", function(data) {

        csvdata.push(data);

    })
    .on("end", function() {
        var len = csvdata.length;
        var i = 0;
        var interval = setInterval(function() {
            var message = "processing " + (i + 1) + "/" + len;
            if (i == len) {
                clearInterval(interval);
                console.log("Done press Ctrl + C to terminate");
                return;
            }
            WriteRow(csvdata[i], message);
            i++;
        }, 250)
        console.log("done");
    });




function WriteRow(csvRecord, message) {
    var defer = Q.defer();
    Q.all([getDistanceMiles(csvRecord), getDistanceMiles1(csvRecord), getDistanceMiles2(csvRecord)])

    .then(function(values) {
        csvRecord.DestBREPMiles = values[0];
        csvRecord.DestHWMiles = values[1];
        csvRecord.DestFHMiles = values[2];

        row = csvRecord;
        w.writeRecord([row.PlantID, row.PlantName, row.PartnerName, row.ContractNumber, row.LocationName, row.SourceLatLong, row.Address, row.Status, row.DestBREPLatLong, row.DestBREPMiles, row.DestHWLatLong, row.DestHWMiles,
            row.DestFHLatLong, row.DestFHMiles
        ]);
        console.log(message);
        q.resolve(true);

    })
    return defer.promise;
}

function getDistanceMiles(csvdatas) {
    var defer = Q.defer();
    var s = (csvdatas.SourceLatLong).replace(/\s+/g, '');
    var e = (csvdatas.DestBREPLatLong).replace(/\s+/g, '');
    var matrixRoutingParams = {
        start0: s,
        destination0: e,
        mode: "fastest;truck" //this mode is set by default 
    };


    hmAPI.matrixRouting(matrixRoutingParams, function(err, result) {
        if (err) {

            defer.resolve(0);
        } else {

            var distance = result.response.matrixEntry[0].summary.distance;
            var miles = distance * 0.00062137;
            defer.resolve(miles);

        }
    });


    return defer.promise;
}


function getDistanceMiles1(csvdatas) {
    var defer = Q.defer();
    var s = (csvdatas.SourceLatLong).replace(/\s+/g, '');
    var e = (csvdatas.DestHWLatLong).replace(/\s+/g, '');
    var matrixRoutingParams = {
        start0: s,
        destination0: e,
        mode: "fastest;truck" //this mode is set by default 
    };


    hmAPI.matrixRouting(matrixRoutingParams, function(err, result) {
        if (err) {

            defer.resolve(0);
        } else {

            var distance = result.response.matrixEntry[0].summary.distance;
            var miles = distance * 0.00062137;
            defer.resolve(miles);
        }
    });

    return defer.promise;
}



function getDistanceMiles2(csvdatas) {
    var defer = Q.defer();
    var s = (csvdatas.SourceLatLong).replace(/\s+/g, '');
    var e = (csvdatas.DestFHLatLong).replace(/\s+/g, '');
    var matrixRoutingParams = {
        start0: s,
        destination0: e,
        mode: "fastest;truck" //this mode is set by default 
    };


    hmAPI.matrixRouting(matrixRoutingParams, function(err, result) {
        if (err) {

            defer.resolve(0);
        } else {

            var distance = result.response.matrixEntry[0].summary.distance;
            var miles = distance * 0.00062137;
            defer.resolve(miles);

        }
    });

    return defer.promise;
}





function WriteHeader() {
    w.writeRecord(["PlantID", "PlantName", "PartnerName", "ContractNumber", "LocationName", "SourceLatLong", "Address", "Status", "DestBREPLatLong", "DestBREPMiles", "DestHWLatLong", "DestHWMiles",
        " DestFHLatLong", "DestFHMiles"
    ]);

}