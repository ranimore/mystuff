var crypto = require('crypto');

function upinGenerator(firstName, lastName, dob){
  var timeNow = new Date();
  //First 4 character;
  var upinInCharacter = "UPIN";
  //15, 16th character
  var hourOfTheDay= (timeNow.getHours() <10) ? "0"+timeNow.getHours() : timeNow.getHours().toString()
  //17th, 18th character
  var nintyNine = "99";
  //5th to 16th digits without hashing
  var toHashString = firstName.concat(lastName).concat(dob.getTime().toString()).concat(timeNow.getTime().toString());

  var hash =  crypto.createHash('sha1').update(toHashString).digest('hex').slice(0,10);
  return hash;

};

function codeGenerator(){
  var hash =  crypto.createHash('md5').update(new Date().toString()).digest('base64');
  return hash;
};

module.exports = {
  upinGenerator: upinGenerator,
  codeGenerator: codeGenerator
}
