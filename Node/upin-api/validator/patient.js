module.exports = {
  'patient.firstName': { 
    notEmpty: true,
    isString: true
  },
  'patient.lastName': { 
    notEmpty: true,
    isString: true
  },
  'patient.email': {
    notEmpty: true,
    isEmail: true
  },
  'patient.password': {
    notEmpty: true,
    isString: true
  },
  'patient.dob': {
    notEmpty: true,
    isDate: true
  }
}
