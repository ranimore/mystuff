
var gcm = require('node-gcm');
var path = require("path");
var express = require('express');
var http = require('http');
var FCM = require('fcm-push');
var hbs = require('hbs').__express;

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = ''


var serverKey = '';
var fcm = new FCM(serverKey);



var bodyParser = require('body-parser');
var app = express();


var cors = require('cors');

app.use(cors());


app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', hbs);
app.use('/public', express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({
   
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/firebase-messaging-sw.js', function (req, res) {
    console.log(path.join(__dirname + '/firebase-messaging-sw.js'));
    res.sendFile(path.join(__dirname + '/firebase-messaging-sw.js'));

});

app.get('/', function (req, res) {
    console.log(path.join(__dirname + 'views/index.html'));
      res.render('index');
});
app.get('/browserRegister', function (req, res) {
    console.log(path.join(__dirname + 'views/browserRegister.html'));
    res.render('browserRegister');
});

app.get('/send_notification', function (req, res) {
    console.log(path.join(__dirname + 'views/send_notification.html'));
    db.collection('tokens').find({}).toArray(function (err, result) {
        if (result === null) {
            console.log("record not found");
        } else {
            res.render('send_notification', { "result": result });
        }


    });
});
var token = '';
app.post('/token', function (req, res) {


    db.collection('tokens').findOne({ email: req.body.email, imei: req.body.imei }, function (err, result) {
        if (err) {
            console.log(err);
            return res.send({ error: err });
        }
        else if (result === null) {
            db.collection('tokens').save(req.body, function (err, result) {
                if (err) {
                    console.log(err);
                    return res.send({ error: err });
                }
                else {
                    console.log('token saved to database');
                    res.send({ result: "Saved token:" + req.body.token });
                    // res.send("sucess");
                }
            })
        } else {
            db.collection('tokens').update({ email: req.body.email, imei: req.body.imei }, { $set: { "token": req.body.token } }, function (err, result) {
                if (err) {
                    return res.send({
                        err: true,
                        error: err
                    });
                } else {
                    return res.send({

                        result: "Token updated:" + req.body.token
                    });
                }
            })
        }
    });

});

app.post('/send', function (req, res) {

    console.log(req.body);
 
    var message = {
        to: req.body.token, // required fill with device token or topics
        collapse_key: 'demo',
        data: {
            title: 'Squarelab',
            sound:"mysound",
            body: req.body.msg
        },
        notification: {
            title: 'Squarelab',
            sound:"mysound",
            body: req.body.msg
        }
    };

    //callback style
    fcm.send(message, function (err, response) {
        if (err) {
            res.json("error" + err);
            console.log("Something has gone wrong!" + err);
        } else {
            res.json("Success" + response);
            console.log("Successfully sent with response: ", response);
        }
    });


});




//app.listen(1337);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    MongoClient.connect(url, function (err, database) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {

            console.log('Connection established to', url);

            // Get the documents collection
            db = database;


        }
    });
});






