var express=require('express');
// var session = require('express-session');
var app=express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
// app.use(session({secret:'RMAONRIE'}));
var svgCaptcha = require('svg-captcha');
 
app.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create();

    //  req.session.captcha = captcha.text;
    
    // res.type('svg');
    // res.status(200).send(captcha.data);
    res.send({text:captcha.text,data:captcha.data})
});
app.get('/',function(req,res){
    //  var captcha =svgCaptcha.create() default 
    var captcha = svgCaptcha.create({noise:8,color:true,background:"#cc9966"});    //with options
    var Mathcaptcha=svgCaptcha.createMathExpr();
    res.render('index',{text:captcha.text,data:captcha.data,MathText:Mathcaptcha.text,MathData:Mathcaptcha.data})
})
app.listen(3000,function(){
    console.log("Listening on http://localhost:3000");
})


// size: 4 // size of random string
// ignoreChars: '0o1i' // filter out some characters like 0o1i
// noise: 1 // number of noise lines
// color: true // characters will have distinct colors instead of grey, true if background option is set
// background: '#cc9966' // background color of the svg image

// width: number // width of captcha
// height: number // height of captcha
// fontSize: number // captcha text size
// charPreset: string // random character preset