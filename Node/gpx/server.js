/////http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#receiveMessage-property

var createGpx = require('gps-to-gpx').default;
var port = process.env.port || 1337;
var bodyParser = require('body-parser');
var express = require('express');
var ejs = require("ejs");
var http = require('http');
var path = require("path");
var app = express();
var aws = require('aws-sdk');
var fs = require('fs');

var xml2js = require('xml2js'); // XML2JS Module
var parser = new xml2js.Parser(); // Creating XML to JSON parser object



var sqs = new aws.SQS({ "accessKeyId": "", "secretAccessKey": "", "region": "" });


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/codemirror',express.static(__dirname+'/codemirror'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});



app.get('/', function (req, res) {
  
    console.log(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    
     
    });

app.post('/create', function (req,res) {
    //create queue
    console.log("name:"+req.body.Qname);
    var params = {
        QueueName: req.body.Qname
    };
    sqs.createQueue(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            
            console.log(data.QueueUrl);
        }     // successful response
   
    });
});

app.post('/send', function (req, res) {
    //create queue
    console.log("name:" + req.body.Qname+"..."+req.body.msg);
    
var params = {
  QueueUrl: req.body.Qname /* required */
};
sqs.purgeQueue(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else   {
   //send message
    var params2 = {
        // QueueUrl: "https://sqs.us-west-2.amazonaws.com/449307939529/" + req.body.Qname,
        QueueUrl: req.body.Qname,
        MessageBody: req.body.msg,
        DelaySeconds: 5
    };
    
    
    sqs.sendMessage(params2, function (err, data) {
        
        if (err)
            console.log(err);
        else {
            console.log("Message send" + data);
            res.send("success");
        }
    });

    console.log("Deleted all messages."+data);
  }             // successful response
});

 
});

app.get('/queuelist', function (req, res) {
    
    sqs.listQueues(function (err, data) {
        if (err) {
            console.log(err);
        } 
        else {
           
            res.json(data);
        
        }
    });
   

});
var arr, arr1, arr2;
var arr3 = [];
var j = 0;
app.post('/msg', function (req, res) {
   
    arr2 = req.body.elevation;
    for (var i = 0; i < arr2.length; i++) {
        arr3[i] = arr2[i].elevation;
   
    }
  
    str = JSON.stringify(req.body.waypoints);
    var parsed = JSON.parse(str, function (k, v) {
        if (k === "lat") {
            this.latitude = v;
            //this.elevation = arr3[j];
            //j++;
        }
        else if (k === "lng")
            this.longitude = v;
        else
          
            return v;
            
    });
  
    var from, to;
    var data = {
        "activityType": req.body.source + " to " + req.body.destination,
        "waypoints": parsed,
    };
    const gpx = createGpx(data.waypoints,
         {
        activityName: data.activityType, 
         });
    
    fs.writeFile('output.gpx', gpx, function (err) {
        if (err)
            return console.log(err);
        else
            console.log('created gpx file');
    });
    arr = gpx;
  
   
  res.json(arr);

}); 

app.get('/index', function (req, res) {
   
  
    parser.parseString(arr, function (err, result) {
       
        arr1 =JSON.stringify( result);
      
    });
    
    arr1 = arr1.split("{").join("{\n");
    res.render('queue', {"msg":arr,"json":arr1});
   
});
app.get('/msg', function (req, res) {
  
   
    res.json(arr);
  
   
}); 


//app.listen(port, function () { console.log("listening on port.."+port);});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


  
    
   
 
    


