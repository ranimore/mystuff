module.exports = {
  'medicine.name':{
    isString: true,
    notEmpty: true
  },
  'medicine.isCurrent':{
    isBoolean: true,
    notEmpty: true
  }, 
  'medicine.dosage':{
    isString: true,
    notEmpty: true
  },
  'medicine.startDate':{
    isDate: true,
    notEmpty: true
  },
  'medicine.endDate':{
    isDate: true,
    notEmpty: true
  },
  'medicine.instructions':{
    isString: true,
    notEmpty: true
  },
  'medicine.medicationType':{
    isString: true,
    notEmpty: true
  },'medicine.frequency':{
    isString: true,
    notEmpty: true
  }
}
