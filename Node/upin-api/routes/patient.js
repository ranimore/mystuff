
module.exports = function (monDb, app) {

  var authentication = require('../helper/token_auth.js')(monDb, 'patients');

  var patient = require('../controller/patient/patient.js')(monDb);
  app.post('/patient', patient.addPatient);
  app.get('/patient/:upin', authentication.ensureAuthentication, authentication.accessingSelf, patient.getPatient);
  app.post('/patient/login', patient.patientLogin);
  app.put('/patient/:upin', authentication.ensureAuthentication, authentication.accessingSelf, patient.updatePatient);
  app.post('/patient/:upin/activation', authentication.ensureAuthentication, authentication.accessingSelf, patient.patientActivate);
  app.post('/patient/:upin/changepassword', patient.ChangePassword);
  app.post('/patient/:upin/forgotpassword/email', patient.forgotPassword);
  app.post('/patient/:upin/forgotpassword/sms', patient.forgotPasswordSMS);

  var allergies = require('../controller/patient/allergies.js')(monDb);
  app.post('/patient/:upin/allergy', authentication.ensureAuthentication, authentication.accessingSelf, allergies.addAllergy);
  app.get('/patient/:upin/allergy', authentication.ensureAuthentication, authentication.accessingSelf, allergies.getAllergies);
  app.put('/patient/:upin/allergy', authentication.ensureAuthentication, authentication.accessingSelf, allergies.updateAllergy)

  var physician = require('../controller/patient/physician.js')(monDb);
  app.post('/patient/:upin/physician', authentication.ensureAuthentication, authentication.accessingSelf, physician.addPhysician);
  app.get('/patient/:upin/physician', authentication.ensureAuthentication, authentication.accessingSelf, physician.getPhysician);
  app.put('/patient/:upin/physician' , authentication.ensureAuthentication , authentication.accessingSelf , physician.updatePhysician)

  var applications = require('../controller/patient/applications.js')(monDb);
  app.post('/patient/:upin/application', authentication.ensureAuthentication, authentication.accessingSelf, applications.addApplication);
  app.get('/patient/:upin/application', authentication.ensureAuthentication, authentication.accessingSelf, applications.getApplications);

  var appointments = require('../controller/patient/appointments.js')(monDb);
  app.post('/patient/:upin/appointment', authentication.ensureAuthentication, authentication.accessingSelf, appointments.addAppointment);
  app.get('/patient/:upin/appointment', authentication.ensureAuthentication, authentication.accessingSelf, appointments.getAppointments);
  app.put('/patient/:upin/appointment', authentication.ensureAuthentication, authentication.accessingSelf, appointments.updateAppointment);

  var assist = require('../controller/patient/assist.js')(monDb);
  app.post('/patient/:upin/assist', authentication.ensureAuthentication, authentication.accessingSelf, assist.addAssist);
  app.get('/patient/:upin/assist', authentication.ensureAuthentication, authentication.accessingSelf, assist.getAssists);

  var demographic = require('../controller/patient/demographic.js')(monDb);
  app.post('/patient/:upin/demographic', authentication.ensureAuthentication, authentication.accessingSelf, demographic.addDemographics);
  app.get('/patient/:upin/demographic', authentication.ensureAuthentication, authentication.accessingSelf, demographic.getDemographics);
  app.put('/patient/:upin/demographic', authentication.ensureAuthentication, authentication.accessingSelf, demographic.updateDemographics);

  var employment = require('../controller/patient/employment.js')(monDb);
  app.post('/patient/:upin/employment', authentication.ensureAuthentication, authentication.accessingSelf, employment.addEmployment);
  app.get('/patient/:upin/employment', authentication.ensureAuthentication, authentication.accessingSelf, employment.getEmployment);
  app.put('/patient/:upin/employment', authentication.ensureAuthentication, authentication.accessingSelf, employment.updateEmployment);

  var insurance = require('../controller/patient/insurance.js')(monDb);
  app.post('/patient/:upin/insurance', authentication.ensureAuthentication, authentication.accessingSelf, insurance.addInsurance);
  app.get('/patient/:upin/insurance', authentication.ensureAuthentication, authentication.accessingSelf, insurance.getInsurance);
  app.put('/patient/:upin/insurance', authentication.ensureAuthentication, authentication.accessingSelf, insurance.updateInsurance);

  var medicine = require('../controller/patient/medicines.js')(monDb);
  
  app.get('/patient/:upin/medicine', authentication.ensureAuthentication, authentication.accessingSelf, medicine.getMedicines);
  app.post('/patient/:upin/medicine', authentication.ensureAuthentication, authentication.accessingSelf, medicine.addMedicine);
  app.put('/patient/:upin/medicine', authentication.ensureAuthentication, authentication.accessingSelf, medicine.updateMedicine);

  var recommendations = require('../controller/patient/recommendations.js')(monDb);
  app.post('/patient/:upin/recomendation', authentication.ensureAuthentication, authentication.accessingSelf, recommendations.addRecommendation);
  app.get('/patient/:upin/recomendation', authentication.ensureAuthentication, authentication.accessingSelf, recommendations.getRecommendations);

  var records = require('../controller/patient/records.js')(monDb);
  app.post('/patient/:upin/record', authentication.ensureAuthentication, authentication.accessingSelf, records.addRecord);
  app.get('/patient/:upin/record', authentication.ensureAuthentication, authentication.accessingSelf, records.getRecords);

  var vitals = require('../controller/patient/vitals.js')(monDb);
  app.post('/patient/:upin/vitals', authentication.ensureAuthentication, authentication.accessingSelf, vitals.addVitals);
  app.get('/patient/:upin/vitals', authentication.ensureAuthentication, authentication.accessingSelf, vitals.getVitals);
  app.put('/patient/:upin/vitals', authentication.ensureAuthentication, authentication.accessingSelf, vitals.updateVitals);

};
