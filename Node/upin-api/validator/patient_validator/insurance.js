module.exports = {
  'insurance.insuranceCarrier':{
    isString: true,
    notEmpty: true
  },
  'insurance.isCurrent':{
    isBoolean: true,
    notEmpty: true
  },
  'insurance.groupID': {
    isAlphanumeric : true,
    notEmpty: true
  }
}
