module.exports = function (db, app) {

  var authentication = require('../helper/token_auth.js')(db, 'users');
  var slide = require('../controller/slide.js')(db);
  app.get('/slide', authentication.ensureAuthentication, slide.getSlides);
  app.get('/slide/:id', authentication.ensureAuthentication, slide.getSlide);
  app.post('/slide', authentication.ensureAuthentication, slide.addSlide);``
  app.put('/slide', authentication.ensureAuthentication, slide.updateSlides);

  var news = require('../controller/news.js')(db);
  app.get('/news', authentication.ensureAuthentication, news.getAllNews);
  app.get('/news/:id', authentication.ensureAuthentication, news.getNewsById);
  app.put('/news', authentication.ensureAuthentication, news.updateNews);
  app.post('/news', authentication.ensureAuthentication, news.addNews);

  var application = require('../controller/application.js')(db);
  app.get('/application', authentication.ensureAuthentication, application.getAllApplications);
  app.get('/application/:id', authentication.ensureAuthentication, application.getApplicationById);
  app.post('/application', authentication.ensureAuthentication, application.addApplication);
  app.put('/application', authentication.ensureAuthentication, application.updateApplication);

  var video = require('../controller/video.js')(db);
  app.get('/video', authentication.ensureAuthentication, video.getAllVideos);
  app.get('/video/:id', authentication.ensureAuthentication, video.getVideoById);
  app.post('/video', authentication.ensureAuthentication, video.addVideo);
  app.put('/video', authentication.ensureAuthentication, video.updateVideos);

  var medicine = require('../controller/medicine.js')(db);
  app.get('/medicine/:id', authentication.ensureAuthentication, medicine.getMedicineById);
  app.post('/medicine', authentication.ensureAuthentication, medicine.addMedicine);
  app.get('/medicine', authentication.ensureAuthentication, medicine.getAllMedicines);
  app.put('/medicine', authentication.ensureAuthentication, medicine.updateMedicine);


  var AuditTrail = require('../helper/auditTrail.js')(db);
  app.get('/AuditTrail/:for/:docId', authentication.ensureAuthentication, AuditTrail.GetTrail);

  var user = require('../controller/user.js')(db);
  app.get('/user/:id', user.getUser);
  app.post('/user', user.addUser);
  app.post('/user/login', user.userLogin);
  app.post('/user/:id/forgotpassword/email', user.forgotpassword);
  app.post('/user/:id/forgotpassword/sms', user.forgotpasswordSMS);
  app.post('/user/:id/Changepassword', user.ChangePassword);

  var bugreport = require('../controller/bugreport.js')(db);
  app.get('/bugreport', authentication.ensureAuthentication, bugreport.getBugReport);
  app.get('/bugreport/:id', authentication.ensureAuthentication, bugreport.getBugReportByID);
  app.post('/bugreport', authentication.ensureAuthentication, bugreport.addBugReport);
};
