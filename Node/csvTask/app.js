var express = require("express");
var http = require('http');
var multer = require('multer');
var path = require('path');
var app = express();
app.set('port', process.env.PORT || 3000);
var fs = require('fs');
var csv1 = require('ya-csv');


var HereMapsAPI = require('node-heremaps').default;
var config = {
    app_id: 'NTZomXH3rJkksgt3q3Yp',
    app_code: 'T5y6LrQXhMs4YbPZ0iX1Iw',
};
var hmAPI = new HereMapsAPI(config);
var port = process.env.port || 1337;
var csv = require("fast-csv");

var Q = require('Q');
var w, fileName;
var d = [];


var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        var d = new Date();
        var datenow = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds();
        fileName = file.fieldname + '-' + datenow + path.extname(file.originalname);
        // w=csv1.createCsvStreamWriter(fs.createWriteStream('./downloads/'+file.fieldname + '-' +datenow+path.extname(file.originalname)));
        callback(null, file.fieldname + '-' + datenow + path.extname(file.originalname));
        // stream = fs.createReadStream("./uploads/"+file.fieldname + '-' +datenow+path.extname(file.originalname));
    }
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/fileupload', function(req, res) {
    var upload = multer({ storage: storage }).single('file');
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


app.get('/download/:file(*)', function(req, res, next) {
    var file = req.params.file,
        path = __dirname + '/downloads/' + file;

    res.download(path);
});

app.get('/delete/:file(*)', function(req, res, next) {
    console.log(req.params.file);

    var file = req.params.file,
        path = __dirname + '/downloads/' + file,
        path1 = __dirname + '/uploads/' + file;

    fs.unlink(path);
    fs.unlink(path1);

});


app.post('/AddDistance', function(req, res, next) {
    var csvdata = [];
    w = csv1.createCsvStreamWriter(fs.createWriteStream('./downloads/' + fileName));
    WriteHeader();
    var stream = fs.createReadStream("./uploads/" + fileName);

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
            res.end(JSON.stringify(len));
            console.log("done");

        });

});





http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
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

function CreateFiles(fileName) {

}




function WriteHeader() {
    w.writeRecord(["PlantID", "PlantName", "PartnerName", "ContractNumber", "LocationName", "SourceLatLong", "Address", "Status", "DestBREPLatLong", "DestBREPMiles", "DestHWLatLong", "DestHWMiles",
        " DestFHLatLong", "DestFHMiles"
    ]);

}