
var Promise = require("bluebird");
var nodemailer = require("nodemailer");
var smtpConfig = 'smtps://%40gmail.com:@smtp.gmail.com';
var _ = require("underscore");

var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
  from: '"UPIN bot" <upin_test@gmail.com>',
  subject: 'Confirm signup'
}

module.exports = function(to, code){
  var thisMailOptions = mailOptions;
  thisMailOptions.to = to;
  thisMailOptions.text = "Please confirm your email by going to the following link: \n " +
    "http://localhost:8080/verify_email/"+ code ;
  return new Promise(function(resolve, reject){
    transporter.sendMail(thisMailOptions, function(err, result){
      if(err){
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
