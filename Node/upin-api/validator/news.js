module.exports = {
  'news.title': {
    isString: true,
    notEmpty: true
  },
  'news.content': {
    isString: true,
    notEmpty: true
  },
  'news.image_url': {
    isURL: true,
    notEmpty: true
  },
  'news.short_description': {
    isString: true,
    notEmpty: true
  },
  'news.url': {
    isURL: true,
    notEmpty: true
  } 
};
