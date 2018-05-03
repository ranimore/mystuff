var nodemailer = require('nodemailer');
var q = require('q');


exports.Send_Email = function (ToEmail,Subject,email_body, data) {
console.log("Email To Be Sent =>" + ToEmail);
var deferred = q.defer();
 var hbs = require('nodemailer-express-handlebars');
    var options = {
        viewEngine: {
            extname: '.hbs',
            layoutsDir: './views/email/',
            defaultLayout: 'template',
            partialsDir: './views/partials/'
        },
        viewPath: './views/email/',
        extName: '.hbs'
    };
    var sgTransport = require('nodemailer-sendgrid-transport');
    //using sendgrid as transport, but can use any transport.
    var send_grid = {
        auth: {
            api_user: 'darshanmarathe',
            api_key: 'darsh2007'
        }
    }


    var mailer = nodemailer.createTransport(sgTransport(send_grid));
    mailer.use('compile', hbs(options));
    mailer.sendMail({
        from: 'noreplay@infoxtech.co.uk',
        to: ToEmail,
        subject: Subject,
        template: email_body,
        context: data
    }, function (error, response) {
       if(error){
            deferred.reject(new Error(error));
       }else{
           deferred.resolve(response);
       }
    });

   return deferred.promise;
}
