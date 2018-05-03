module.exports = {
  'demographic.address.addressType': { isString: true, notEmpty: true },
  'demographic.address.address1': { isString: true, notEmpty: true },
  'demographic.address.address2': { isString: true },
  'demographic.address.city': { isString: true, notEmpty: true },
  'demographic.address.state': { isString: true, notEmpty: true },
  'demographic.address.zip_code':{ isString: true, notEmpty: true },
  'demographic.phone.phoneType':{ isString: true, notEmpty:true }, 
  'demographic.phone.isPrimary':{ isBoolean:true, notEmpty:true },
  'demographic.phone.phoneNumber':{ isString: true, notEmpty:true },
  'demographic.email.emailType': {isString: true, notEmpty:true},
  'demographic.email.emailAddress':{isEmail: true, notEmpty:true},
  'demographic.email.isPrimary':{isBoolean: true, notEmpty:true}
} 
  
