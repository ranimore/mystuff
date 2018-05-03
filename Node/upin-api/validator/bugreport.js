module.exports = {
  'bugReport.email': { 
    notEmpty: true,
    isEmail: true
  },
  'bugReport.text': { 
    notEmpty: true,
    isString: true
  },
  'bugReport.report_date': { 
    notEmpty: true,
    isDate: true
  },
  'bugReport.UPIN': { 
    notEmpty: true,
    isString: true
  }
}