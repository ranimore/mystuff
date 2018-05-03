module.exports = {
  'application.name': {
    isString: true,
    notEmpty: true
  },
  'application.logo_url': {
    isURL: true,
    notEmpty: true
  },
  'application.description': {
    isString: true,
    notEmpty: true
  },
  'application.appstore_link': {
    isURL: true,
    notEmpty: true
  },
  'application.advertisment_image_url': {
    isURL: true,
    notEmpty: true
  },
  'application.recommendation_reason':{
    isString: true,
    notEmpty: true
  } 
};
