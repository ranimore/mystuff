
var port = process.env.port || 1337;
var bodyParser = require('body-parser');
var express = require('express');
var ejs = require("ejs");
var http = require('http');
var path = require("path");
var app = express();

var fs = require('fs');



app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));


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

app.get('/track/:id',function(req,res){
    var id=req.params.id;
                var arr = {
                empid:id,
                location: [{
                    latlng: "18.512753, 73.917491",
                    datetime: "28-02-2016:10am"
                },
                {
                    latlng: "18.503996,73.925872",
                    datetime: "28-02-2016:11am"
                },
                {
                    latlng: "18.514733,73.932217",
                    datetime: "28-02-2016:1pm"
                },
                {
                    latlng: "18.533056,73.933009",
                    datetime: "28-02-2016:4pm"
                },
                {
                    latlng: "18.562263,73.939016",
                    datetime: "28-02-2016:6pm"
                }]
            };
    res.json(arr);
});


//app.listen(port, function () { console.log("listening on port.."+port);});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


  
    
   
 
    


