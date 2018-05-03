// Twilio Credentials 
var account = require('../config/sms_credentials.js');

//require the Twilio module and create a REST client 
var client = require('twilio')(account.accountSid, account.authToken);
var q = require('q');
    
exports.sendSMS=function(mobNumber,otp){
  
   var deferred = q.defer();
   var Mobno=mobNumber;
  
    client.messages.create({
    to: Mobno,
    from: "+12248360669",
    body: "Hi ,Please enter given OTP to change password. OTP="+otp,

}, function (err, message) {
   if(err)
   { console.log(err);
       deferred.reject(new Error(err));
      
   }else{
          console.log(message.sid);
           deferred.resolve(message);
       }
});
 return deferred.promise;
}