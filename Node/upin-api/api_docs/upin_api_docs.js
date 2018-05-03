/**
 * @apiDefine userNotFoundError
 *
 * @apiError userNotFound The <code>id</code> of the user was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound"
 *     }
 */

/**
 * @api {get} /user/:id Request user information
 * @apiName Getuser
 * @apiGroup user
 * @apiVersion 0.1.0
 * @apiParam {String} id The users-ID.
 * 
 * @apiSuccess {String} email The users email.
 * @apiSuccess {String}  name The users name.
 * @apiSuccess {String} token        The new users-token.
 * @apiSuccess {String} otp         The new users-otp.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *     "user":{ 
 *           "email" : "jimmykimmel@live.com", 
 *           "name" : "Jimmy", 
 *           "token" : "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA", 
 *           "otp" : "020696"
 *            }
 *           }
 * }
 * @apiUse userNotFoundError
  */
function getuser() {
    return;
}

/**
 * @api {post} /user Create a new user
 * @apiVersion 0.1.0
 * @apiName adduser
 * @apiGroup user
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/user
 *         {
 *         
 *          "email": "xyz@gmail.com",
 *          "password":"12345",
 *          "name":"xyz"
 *      	}
 * @apiParam {String} name Name of the user.
 * @apiParam {String} email Email of the user.
 * @apiParam {String} password Password of the user.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreateuserError Unable to create new user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreateuserError"
 *     }
 */
function adduser() { return; }
/**
 * @api {post} /user/login user Login
 * @apiVersion 0.1.0
 * @apiName Loginuser
 * @apiGroup user
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/user/login
 *     body:
 *         {
 *         
 *          "email": "xyz@gmail.com",
 *          "password":"12345",
 *          "name":"xyz"
 *      	}
 * @apiParam {String} name Name of the user.
 * @apiParam {String} email Email of the user.
 * @apiParam {String} password Password of the user.
 * @apiSuccess {String} token        The new users-token.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * { 
 * "token" : "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA", 
 * }
 * 
 * @apiError EmailNotFoundError Email doesn't exist.
 * @apiError InvalidEmail/PwdError Invalid email/password combination.
 * @apiError ServerError Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": " InvalidEmail/PwdError"
 *     }
 */

function userLogin() { return; }

/**
 * @api {post} /user/:id/forgotpassword/email user forgotpassword send email
 * @apiVersion 0.1.0
 * @apiName forgotpassword
 * @apiGroup user
 *@apiExample {json} Example usage:
 *     endpoint: http://localhost/:id/forgotpassword/sms
 *     body:
 *         {
 *         
 *          "email": "xyz@gmail.com",
 *      	}
 * @apiParam {String} id The users-ID.
 * @apiParam {String} email Email of the user.
 * @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
 * {
 * "err": false,
 * "result": {
 *  "message": "success"
 * }
 * }
 * 
 * @apiUse userNotFoundError
 */
function forgotpassword() { return; }

/**
 * @api {post} /user/:id/forgotpassword/sms user forgotpassword send sms
 * @apiVersion 0.1.0
 * @apiName forgotpasswordSMS
 * @apiGroup user
 *@apiExample {json} Example usage:
 *     endpoint: http://localhost/:id/forgotpassword/sms
 *     body:
 *         {
 *         
 *          "mobile": "+445458345389",
 *      	}
 * @apiParam {String} id The users-ID.       
 * @apiParam {String} mobile mobile number with country code of the user.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err": false,
 * "result": {
 *  "message": "success"
 * }
 * }
 * 
 * @apiUse userNotFoundError
 */
function forgotpasswordSMS() { return; }

/**
 * @api {post} /user/:id/Changepassword' user Change Password
 * @apiVersion 0.1.0
 * @apiName ChangePassword
 * @apiGroup user
 * *@apiExample {json} Example usage:
 *     endpoint: http://localhost/:id/Changepassword
 *     body:
 *         {
 *         
 *          "otp": "345389",
 *          "password":"12345",
 *           "confPassword":"12345"
 *      	}
 * @apiParam {String} id The users-ID.
 * 
 * @apiParam {String} otp  otp got by user.
 * @apiParam {String} password  New password of user.
 * @apiParam {String}  confPassword  confirm Password of user.
 * @apiError PwdNotMatchError Password and confirm password do not match.
 * @apiError InvalidOtpError Invalid OTP Presented.Please try again.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 * 
 * * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidOtpError"
 *     }
 */
function ChangePassword() { return; }



/**
 * @api {post} /slide Create a new slide
 * @apiVersion 0.1.0
 * @apiName addslide
 * @apiGroup slide
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/slide
*
*     body:
*         {
*   "slide": {
*       "title": "Red",
*       "text": "Red",
*       "param": "Identifies color red",
*       "background_image_url": "www.google.com/asd",
*       "static_image_url": "www.google.com/asd",
*       "slide_no": "www.google.com/asd",
*       "type": "Because I love it!"
*   }
* }
*
 * @apiParam {String} title title of the slide.
 * @apiParam {String} text text of the slide.
 * @apiParam {URL} background_image_url background image url of the slide.
 * @apiParam {URL} static_image_url static image url of the slide.
 * @apiParam {String} slide_no slide number .
 * @apiParam {String} type  Type of the slide .
 * 
 *
 *  * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreateSlideError Unable to create new slide.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreateSlideError"
 *     }
 */
function addslide() { return; }

/**
 * @apiDefine slideNotFoundError
 *
 * @apiError slideNotFound The <code>id</code> of the slide was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "slideNotFound"
 *     }
 */

/**
 * @api {get} /slide/:id Request One slide information
 * @apiName Getslide
 * @apiGroup slide
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} id The slides-ID.
 * 
 * @apiSuccess {String} id The slides-ID.
*  @apiSuccess {String} title title of the slide.
 * @apiSuccess {String} text text of the slide.
 * @apiSuccess {URL} background_image_url background image url of the slide.
 * @apiSuccess {URL} static_image_url static image url of the slide.
 * @apiSuccess {String} param Identification
 * @apiSuccess {String} slide_no slide number .
 * @apiSuccess {String} type  Type of the slide .
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":[
 *              {
 *                  "_id":"582ef75c56e02c3730852121",
 *                  "title":"yellow",
 *                  "text":"Yellow",
 *                  "param":"Identifies color yellow",
 *                  "background_image_url":"www.google.com/asd",
 *                  "static_image_url":"www.google.com/asd",
 *                  "slide_no":"www.google.com/asd",
 *                  "type":"Because I love it!"
 *              }
 *             ]
 * }
 * 
 * @apiUse slideNotFoundError
  */
function getslide() {
    return;
}

/**
 * @api {get} /slide Request All slides information
 * @apiName Getslides
 * @apiGroup slide
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * 
 * @apiSuccess {String} id The slides-ID.
 * @apiSuccess {String} title title of the slide.
 * @apiSuccess {String} text text of the slide.
 * @apiSuccess {URL} background_image_url background image url of the slide.
 * @apiSuccess {URL} static_image_url static image url of the slide.
 * @apiSuccess {String} param Identification
 * @apiSuccess {String} slide_no slide number .
 * @apiSuccess {String} type  Type of the slide .
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":[
 *              {
 *                  "_id":"582ef75c56e02c3730852121",
 *                  "title":"yellow",
 *                  "text":"Yellow",
 *                  "param":"Identifies color yellow",
 *                  "background_image_url":"www.google.com/asd",
 *                  "static_image_url":"www.google.com/asd",
 *                  "slide_no":"www.google.com/asd",
 *                  "type":"Because I love it!"
 *              }
 *             ]
 * }
 * 
 * 
 */
function getslides() {
    return;
}

/**
 * @api {put} /slide Change slides information
 * @apiName Updateslide
 * @apiGroup slide
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/slide
*
*     body:
*         {
*   "slide": {
*     "_id" : "582ef75c56e02c3730852121", 
*       "title": "Red",
*       "text": "Red",
*       "param": "Identifies color red",
*       "background_image_url": "www.google.com/asd",
*       "static_image_url": "www.google.com/asd",
*       "slide_no": "www.google.com/asd",
*       "type": "Because I love it!"
*   }
* }
*
 * @apiParam {String} id The slides-ID.
 * @apiParam {String} title title of the slide.
 * @apiParam {String} text text of the slide.
 * @apiParam {URL} background_image_url background image url of the slide.
 * @apiParam {URL} static_image_url static image url of the slide.
 * @apiParam {String} param Identification
 * @apiParam {String} slide_no slide number .
 * @apiParam {String} type  Type of the slide .
 *  @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 * }
 * * @apiUse slideNotFoundError
 */
function updateslides() {
    return;
}
/**
 * @api {post} /news Create a new news
 * @apiVersion 0.1.0
 * @apiName addnews
 * @apiGroup news
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *  @apiExample {json} Example usage:
*     endpoint: http://localhost/news
*
*body:
* {
* "title" : "Musk settles on mars", 
*  "content" : "In a parallel universe", 
*  "image_url" : "www.google.co", 
*  "short_description" : "There are already many species there", 
*  "url" : "www.google.com"
* }
 * @apiParam {String} title title of the news.
 * @apiParam {String} content content of the news.
 * @apiParam {URL} image_url image url of the news.
 * @apiParam {String} short_description short description of the news .
 * @apiParam {URL} url  url of the news.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreatenewsError Unable to create new news.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatenewsError"
 *     }
 */
function addnews() { return; }

/**
 * @apiDefine newsNotFoundError
 *
 * @apiError newsNotFound The <code>id</code> of the news was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "newsNotFound"
 *     }
 */

/**
 * @api {get} /news/:id Request One news information
 * @apiName Getnews
 * @apiGroup news
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} id The newss-ID.
 * 
 * @apiSuccess {String} id The newss-ID.
 *  @apiSuccess {String} title title of the news.
 * @apiSuccess {String} content content of the news.
 * @apiSuccess {URL} image_url  image url of the news.
 * @apiSuccess {String} short_description short description url of the news.
 * @apiSuccess {URL} url url of news.

 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id":"5830053ce00cf51ff888abb3",
 *              "title":"Musk settles on mars",
 *              "content":"In a parallel universe",
 *              "image_url":"www.google.co",
 *              "short_description":"There are already many species there",
 *              "url":"www.google.com"
 *          }
 *         ]
 * }
 * 
 * @apiUse newsNotFoundError
  */
function getnews() {
    return;
}

/**
 * @api {get} /news Request All news information
 * @apiName GetAllnews
 * @apiGroup news
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * 
 * @apiSuccess {String} id The news-ID.
 * @apiSuccess {String} title title of the news.
 * @apiSuccess {String} content content of the news.
 * @apiSuccess {URL} image_url  image url of the news.
 * @apiSuccess {String} short_description short description url of the news.
 * @apiSuccess {URL} url url of news.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id":"5830053ce00cf51ff888abb3",
 *              "title":"Musk settles on mars",
 *              "content":"In a parallel universe",
 *              "image_url":"www.google.co",
 *              "short_description":"There are already many species there",
 *              "url":"www.google.com"
 *          }
 *         ]
 * }
 * 
 * 
 */
function getallnews() {
    return;
}

/**
 * @api {put} /news Change news information
 * @apiVersion 0.1.0
 * @apiName updatenews
 * @apiGroup news
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/news
*
*body:
* {
* "_id" : "582ef75c56e02c3730852121", 
* "title" : "Musk settles on mars", 
*  "content" : "In a parallel universe", 
*  "image_url" : "www.google.co", 
*  "short_description" : "There are already many species there", 
*  "url" : "www.google.com"
* }
 * @apiParam {String} title title of the news.
 * @apiParam {String} content content of the news.
 * @apiParam {URL} image_url image url of the news.
 * @apiParam {String} short_description short description of the news .
 * @apiParam {URL} url  url of the news.
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 * }
 *
 *  @apiUse newsNotFoundError
 */
function updatenews() { return; }

/**
 * @api {post} /application Create a new application
 * @apiVersion 0.1.0
 * @apiName addapplication
 * @apiGroup application
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *  @apiExample {json} Example usage:
*     endpoint: http://localhost/application
*
*body:
* {
*  "application": {
*      "name": "yellow",
*      "description": "Identifies color yellow",
*      "logo_url": "www.google.com/asd",
*      "appstore_link": "www.google.com/asd",
*      "advertisment_image_url": "www.google.com/asd",
*      "recommendation_reason": "Because I love it!"
*  }
* }
 * @apiParam {String} name name of the application.
 * @apiParam {URL} logo_url logo url of the application.
 * @apiParam {String} description description of the application.
 * @apiParam {URL} appstore_link appstore link of the application.
 * @apiParam {URL} advertisment_image_url advertisment image url of the application .
 * @apiParam {String} recommendation_reason  recommendation reason of the application .
 * 
 *
 *  * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreateApplicationError Unable to create new application.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreateApplicationError"
 *     }
 */
function addapplication() { return; }

/**
 * @apiDefine applicationNotFoundError
 *
 * @apiError applicationNotFound The <code>id</code> of the application was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "applicationNotFound"
 *     }
 */

/**
 * @api {get} /application/:id Request One application information
 * @apiName Getapplication
 * @apiGroup application
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} id The applications-ID.
 * 
 * @apiSuccess {String} id The applications-ID.
 * @apiSuccess {String} name name of the application.
 * @apiSuccess {URL} logo_url logo url of the application.
 * @apiSuccess {String} description description of the application.
 * @apiSuccess {URL} appstore_link appstore link of the application.
 * @apiSuccess {URL} advertisment_image_url advertisment image url of the application .
 * @apiSuccess {String} recommendation_reason  recommendation reason of the application .
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err":false,
 * "result":[
 *          {
 *              "_id":"58302d508b647f36bcf24e02",
 * "             name":"Application1",
 *               "logo_url":"www.google.com/logo",
 *               "description":"This is first Application",
 *               "appstore_link":"www.google.com/appstore",
 *               "advertisment_image_url":"www.google.com/image",
 *                "recommendation_reason":"give some reason"
 *          }
 *         ]
 * }
 * 
 * @apiUse applicationNotFoundError
  */
function getapplication() {
    return;
}

/**
 * @api {get} /application Request All application information
 * @apiName GetAllapplication
 * @apiGroup application
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * 
 * @apiSuccess {String} id The applications-ID.
 * @apiSuccess {String} name name of the application.
 * @apiSuccess {URL} logo_url logo url of the application.
 * @apiSuccess {String} description description of the application.
 * @apiSuccess {URL} appstore_link appstore link of the application.
 * @apiSuccess {URL} advertisment_image_url advertisment image url of the application .
 * @apiSuccess {String} recommendation_reason  recommendation reason of the application .
 * 
  * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err":false,
 * "result":[
 *          {
 *              "_id":"58302d508b647f36bcf24e02",
 * "             name":"Application1",
 *               "logo_url":"www.google.com/logo",
 *               "description":"This is first Application",
 *               "appstore_link":"www.google.com/appstore",
 *               "advertisment_image_url":"www.google.com/image",
 *                "recommendation_reason":"give some reason"
 *          }
 *         ]
 * }
 * 
 */
function getallapplication() {
    return;
}
/**
 * @api {put} /application Change application information
 * @apiVersion 0.1.0
 * @apiName Updateapplication
 * @apiGroup application
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/application
*
*body:
* {
*  "application": {
*       "_id" : "582ef75c56e02c3730852121", 
*      "name": "yellow",
*      "description": "Identifies color yellow",
*      "logo_url": "www.google.com/asd",
*      "appstore_link": "www.google.com/asd",
*      "advertisment_image_url": "www.google.com/asd",
*      "recommendation_reason": "Because I love it!"
*  }
* }
 * 
 * @apiParam {String} id The applications-ID.
 * @apiParam {String} name name of the application.
 * @apiParam {URL} logo_url logo url of the application.
 * @apiParam {String} description description of the application.
 * @apiParam {URL} appstore_link appstore link of the application.
 * @apiParam {URL} advertisment_image_url advertisment image url of the application .
 * @apiParam {String} recommendation_reason  recommendation reason of the application .
 * 
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 * }
 *
 *@apiUse applicationNotFoundError
 */
function updateapplication() { return; }

/**
 * @api {post} /video Create a new video
 * @apiVersion 0.1.0
 * @apiName addvideo
 * @apiGroup video
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *  @apiExample {json} Example usage:
*     endpoint: http://localhost/video
*
*body:
* {
*  "name" : "Application1", 
*  "url" : "www.google.com/video"
* }
 * @apiParam {String} name name of the video.
 * @apiParam {URL} url  url of the video.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreatevideoError Unable to create new video.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatevideoError"
 *     }
 */
function addvideo() { return; }

/**
 * @apiDefine videoNotFoundError
 *
 * @apiError videoNotFound The <code>id</code> of the video was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "videoNotFound"
 *     }
 */

/**
 * @api {get} /video/:id Request One video information
 * @apiName Getvideo
 * @apiGroup video
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} id The videos-ID.
 * 
 * @apiSuccess {String} id The videos-ID.
 * @apiSuccess {String} name name of the video.
 * @apiSuccess {URL} url url of video.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id": "58304384c852841b50943263",
 *              "name": "Iodine",
 *              "url": "www.google.com/video"
 *          }
 *         ]
 * }
 * 
 * @apiUse videoNotFoundError
  */
function getvideo() {
    return;
}

/**
 * @api {get} /video Request All video information
 * @apiName GetAllvideo
 * @apiGroup video
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {String} id The videos-ID.
 * @apiSuccess {String} name name of the video.
 * @apiSuccess {URL} url url of video.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id": "58304384c852841b50943263",
 *              "name": "Iodine",
 *              "url": "www.google.com/video"
 *          }
 *         ]
 * }
 * 
 * 
 */
function getallvideo() {
    return;
}

/**
 * @api {put} /video Change video information
 * @apiVersion 0.1.0
 * @apiName updatevideo
 * @apiGroup video
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/video
*
*body:
* {
*     "_id" : "582ef75c56e02c3730852121", 
*  "name" : "Application1", 
*  "url" : "www.google.com/video"
* }
 * @apiParam {String} _id Id of the video.
 * @apiParam {String} name name of the video.
 * @apiParam {URL} url  url of the video.
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 * }
 *
 *  @apiUse videoNotFoundError
 */
function updatevideo() { return; }

/**
 * @api {post} /medicine Create a new medicine
 * @apiVersion 0.1.0
 * @apiName addmedicine
 * @apiGroup medicine
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/medicine
*
*body:
*{
*  "medicine": {
*      "name": "Iodine",
*      "image_url": "www.whatmedicine.com"
*  }
*}
 * @apiParam {String} name name of the medicine.
 * @apiParam {URL} image_url  image url of the medicine.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreatemedicineError Unable to create new medicine.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatemedicineError"
 *     }
 */
function addmedicine() { return; }

/**
 * @apiDefine medicineNotFoundError
 *
 * @apiError medicineNotFound The <code>id</code> of the medicine was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "medicineNotFound"
 *     }
 */

/**
 * @api {get} /medicine/:id Request One medicine information
 * @apiName Getmedicine
 * @apiGroup medicine
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} id The medicines-ID.
 * 
 * @apiSuccess {String} id The medicines-ID.
 * @apiSuccess {String} name name of the medicine.
 * @apiSuccess {URL} image_url image url of medicine.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id": "58304384c852841b50943263",
 *              "name": "Iodine",
 *             "image_url": "www.whatmedicine.com"
 *          }
 *         ]
 * }
 * 
 * @apiUse medicineNotFoundError
  */
function getmedicine() {
    return;
}

/**
 * @api {get} /medicine Request All medicine information
 * @apiName GetAllmedicine
 * @apiGroup medicine
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {String} id The medicines-ID.
 * @apiSuccess {String} name name of the medicine.
 * @apiSuccess {URL} image_url image url of medicine.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id": "58304384c852841b50943263",
 *              "name": "Iodine",
 *              "image_url": "www.whatmedicine.com"
 *           }
 *         ]
 *}
 * 
 * 
 */
function getallmedicine() {
    return;
}

/**
 * @api {put} /medicine Change medicine information
 * @apiVersion 0.1.0
 * @apiName updatemedicine
 * @apiGroup medicine
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
  * @apiExample {json} Example usage:
*     endpoint: http://localhost/medicine
*
*body:
*{
*  "medicine": {
*      "name": "Iodine",
*      "image_url": "www.whatmedicine.com"
*  }
*}
 * 
 * @apiParam {String} -id Id of the medicine.
 * @apiParam {String} name name of the medicine.
 * @apiParam {URL} url  url of the medicine.
 *
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 * }
 *
 *  @apiUse medicineNotFoundError
 */
function updatemedicine() { return; }

/**
 * @api {post} /bugreport Create a new bugreport
 * @apiVersion 0.1.0
 * @apiName addbugreport
 * @apiGroup bugreport
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
*     endpoint: http://localhost/bugreport
*
*body:
*{
*   "bugReport": {
*       "email": "xyz@gmail.com",
*       "text": "bug",
*       "report_date": "02/09/1993",
*       "UPIN": "659244592"
*   }
* }
 * @apiParam {Email} email email of the bugreport.
 * @apiParam {String} text text of the bugreport.
 * @apiParam {Date} report_date report date of the bugreport.
 * @apiParam {String} UPIN UPIN of the bugreport .
 * 
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreatebugreportError Unable to create new bugreport.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatebugreportError"
 *     }
 */
function addbugreport() { return; }

/**
 * @apiDefine bugreportNotFoundError
 *
 * @apiError bugreportNotFound The <code>id</code> of the bugreport was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "bugreportNotFound"
 *     }
 */

/**
 * @api {get} /bugreport/:id Request One bugreport information
 * @apiName Getbugreport
 * @apiGroup bugreport
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *
 * @apiParam {String} id The bugreports-ID.
 * 
 * @apiSuccess {String} id The bugreports-ID.
 * @apiSuccess {Email}  email email of the bugreport.
 * @apiSuccess {String} text text of the bugreport.
 * @apiSuccess {Date} report_date report date of the bugreport.
 * @apiSuccess {String} UPIN UPIN of the bugreport .
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id":"5830053ce00cf51ff888abb3",
 *              "email":"xyz@gmail.com",
 *              "text":"bug",
 *              "report_date":"02/09/1993",
 *              "UPIN":"659244592"
 *          }
 *         ]
 * }
 * 
 * @apiUse bugreportNotFoundError
  */
function getbugreport() {
    return;
}

/**
 * @api {get} /bugreport Request All bugreport information
 * @apiName GetAllbugreport
 * @apiGroup bugreport
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * 
 * @apiSuccess {String} id The bugreports-ID.
 * @apiSuccess {Email}  email email of the bugreport.
 * @apiSuccess {String} text text of the bugreport.
 * @apiSuccess {Date} report_date report date of the bugreport.
 * @apiSuccess {String} UPIN UPIN of the bugreport .
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err":false,
 * "result":[
 *           {
 *              "_id":"5830053ce00cf51ff888abb3",
 *              "email":"xyz@gmail.com",
 *              "text":"bug",
 *              "report_date":"02/09/1993",
 *              "UPIN":"659244592"
 *          }
 *         ]
 * }
 * 
 * 
 */
function getallbugreport() {
    return;
}
/**
 * /**
 * @api {post} /patient Create a new patient
 * @apiVersion 0.1.0
 * @apiName addPatient
 * @apiGroup patient
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient
 *
 *     body:
 *         {
 *          "patient":{
 *          "firstName":"Micheal",
 *          "lastName": "J. Fox",
 *          "email": "micheal@gmail.com",
 *          "password": "stark",
 *          "dob": "02/09/1992"
 *      	}
 *        }
 * 
 * 
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} firstName firstName of the patient.
 * @apiParam {String} lastName   lastName of the patient.
 * @apiParam {Email} email email of the patient.
 * @apiParam {String} password password of the patient.
 * @apiParam {Date} dob Birthdate of patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *    "err":false,
 *    "result":{
 *               "ok":1,
 *                "n":1
 *             }
 *}
 * @apiError CreatepatientError Unable to create new patient.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatemedicineError"
 *     }
 */
function addpatient() { return; }

/**
 * /**
 * @api {post} /patient/login Patient Login
 * @apiVersion 0.1.0
 * @apiName loginPatient
 * @apiGroup patient
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/login
 *
 *     body:
 *{
 *
 *   "patient":{
 *    "email": "usman123@gmail.com",
 *   "password": "stark"
 *	}
 *}
 * 
 * @apiParam {Email} email email of the patient.
 * @apiParam {String} password password of the patient.
 * @apiSuccess {String} token        The new patients-token.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * { 
 * "token" : "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.rVRjrC1SpLNzQNpIZebHwpScR0Iv4uNF51suyupycwA", 
 * }
 * 
 * @apiError EmailNotFoundError Email doesn't exist.
 * @apiError InvalidEmail/PwdError Invalid email/password combination.
 * @apiError ServerError Server error.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": " InvalidEmail/PwdError"
 *     }
 */
function loginpatient() { return; }
/**
 * @apiDefine patientNotFoundError
 *
 * @apiError patientNotFound The <code>upin</code> of the patient was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "patientNotFound"
 *     }
 */


/**
* @api {get} /patient:upin Get patient information
* @apiVersion 0.1.0
* @apiName getPatient
* @apiGroup patient
* @apiHeader {String} Authorization patients unique token.
* 
* @apiHeaderExample {json} Header-Example:
*     {
*       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
*     }
* @apiParam {String} upin Upin of the patient.
* @apiSuccess {String} firstName fiestName of the patient.
* @apiSuccess {String} lastName   lastName of the patient.
* @apiSuccess {Email} email email of the patient.
* @apiSuccess {String} password password of the patient.
* @apiSuccess {Date} dob Birthdate of patient.
* @apiSuccess {String} upin upin of patient.
* @apiSuccess {Date} updatedOn date of record updated.
* @apiSuccess {Boolean} isActive patient is active or not.
* @apiSuccess {String} otp otp send to patient.
* @apiSuccess {token} token token of patient.
* @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
*{
*"err":false,
* "result":[
*           { 
*            "firstName" : "Micheal", 
*            "lastName" : "J. Fox", 
*            "email" : "micheal@gmail.com", 
*            "dob" : "02/09/1992", 
*            "upin" : "23d4ad98f4", 
*            "updatedOn" : ISODate("2016-11-19T09:54:41.049+0000"), 
*            "isActive" : false, 
*            "otp" : "494162", 
*            "token" : "eyJhbGciOiJIUzI1NiJ9.bWljaGVhbEBnbWFpbC5jb21zdGFyaw.vQIqIrMT3SK4u1D4t11ljHZHa93y0vJaurWFO5m9OhE"
*            }
*         ]
*}
*@apiUse patientNotFoundError
*/
function getPatient() { return; }
/**
 * /**
 * @api {put} /patient:upin Change patient informaton.
 * @apiVersion 0.1.0
 * @apiName updatePatient
 * @apiGroup patient
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *@apiExample {json} Example usage:
 *     endpoint: http://localhost/patient:upin
 *     body:
 *         {
 *          "patient":{
 *          "firstName":"Micheal",
 *          "lastName": "J. Fox",
 *          "email": "micheal@gmail.com",
 *          "password": "stark",
 *          "dob": "02/09/1992"
 *      	}
 *        }
 * 
 * @apiParam {String} upin Upin of the patient.
 *
 * @apiParam {String} firstName firstName of the patient.
 * @apiParam {String} lastName   lastName of the patient.
 * @apiParam {Email} email email of the patient.
 * @apiParam {String} password password of the patient.
 * @apiParam {Date} dob Birthdate of patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
  * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 *  }
 *@apiUse patientNotFoundError
 */
function updatePatient() { return; }

/**
 * /**
 * @api {post} /patient:upin/activation Patient activation.
 * @apiVersion 0.1.0
 * @apiName ActivatePatient
 * @apiGroup patient
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient:upin/activation
 *
 *     body:
 *         {
 *          
 *          "otp": "138443",
 *         	
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} otp   otp of the patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "err":false,
 *  "result":{
 *              "ok":1,
 *              "nModified":1,
 *              "n":1
 *           }
 *  }
 *@apiUse patientNotFoundError
 */
function ActivatePatient() { return; }
/**
 * @api {post} /patient/:upin/forgotpassword/email patient forgotpassword send email
 * @apiVersion 0.1.0
 * @apiName forgotpassword
 * @apiGroup patient
 * *@apiExample {json} Example usage:
 *     endpoint: /patient/:upin/forgotpassword/email
 *     body:
 *         {
 *            "email": "micheal@gmail.com",
 *      	}
 *        }
 * 
 * @apiParam {String} upin The patients upin.
 * 
 * @apiParam {String} email Email of the patient.
 * @apiSuccessExample {json} Success-Response:
* HTTP/1.1 200 OK
 * {
 * "err": false,
 * "result": {
 *  "message": "success"
 * }
 * }
 * 
 * @apiUse patientNotFoundError
 */
function forgotpassword() { return; }

/**
 * @api {post} /patient/:upin/forgotpassword/sms patient forgotpassword send sms
 * @apiVersion 0.1.0
 * @apiName forgotpasswordSMS
 * @apiGroup patient
 * @apiParam {String} upin The patients upin.
 * *@apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/forgotpassword/sms
 *     body:
 *         {
 *         
 *          "mobile": "+445458345389",
 *      	}
 *       
 * @apiParam {String} mobile mobile number with country code of the patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err": false,
 * "result": {
 *  "message": "success"
 * }
 * }
 * 
 * @apiUse patientNotFoundError
 */
function forgotpasswordSMS() { return; }

/**
 * @api {post} /patient/:upin/Changepassword patient Change Password
 * @apiVersion 0.1.0
 * @apiName ChangePassword
 * @apiGroup patient
 *@apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/Changepassword
 *     body:
 *         {
 *         
 *          "otp":"122341",
 *          "password": "ffefs",
 *          "confPassword": "ffefs",
 *      	
 *        }
 * @apiParam {String} upin The patients-upin.
 * @apiParam {String} otp  otp got by patient.
 * @apiParam {String} password  New password of patient.
 * @apiParam {String}  confPassword  confirm Password of patient.
 * @apiError PwdNotMatchError Password and confirm password do not match.
 * @apiError InvalidOtpError Invalid OTP Presented.Please try again.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 * 
 * * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidOtpError"
 *     }
 */
function ChangePassword() { return; }

/**
 * @api {post} /patient/:upin/allergy Create a new patient allergy
 * @apiVersion 0.1.0
 * @apiName addPatientallergy
 * @apiGroup patient allergy
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/allergy
 *
 *     body:
 *    {
 *      "allergy": {
 *                  "dateDiagnosed": "02/09/1992",
 *                  "allergy": "Rash"
 *                 }
 *    }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {Date} dateDiagnosed   dateDiagnosed of the patient allergy.
 * @apiParam {String} allergy allergy of the patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "ok": 1,
 * "nModified": 1,
 *  "n": 1
 *}
 * @apiError CreatepatientAllergyError Unable to create new patient allergy.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientAllergyError"
 *     }
 */
function addPatientallergy() { return; }

/**
 * @api {put} /patient/:upin/allergy Change patient allergy
 * @apiVersion 0.1.0
 * @apiName updatePatientallergy
 * @apiGroup patient allergy
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/allergy
 *
 *     body:
 *    {
 *      "allergy": {
 *                  "dateDiagnosed": "02/09/1992",
 *                  "allergy": "Rash"
 *                 }
 *    }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {Date} dateDiagnosed   dateDiagnosed of the patient allergy.
 * @apiParam {String} allergy allergy of the patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientallergy() { return; }
/**
 * @api {get} /patient/:upin/allergy get patient allergy information
 * @apiVersion 0.1.0
 * @apiName getPatientallergy
 * @apiGroup patient allergy
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {Date} dateDiagnosed   dateDiagnosed of the patient allergy.
 * @apiSuccess {String} allergy allergy of the patient.
 * @apiSuccess {Date} updatedOn allergy updated date.
 * @apiSuccessExample {json} Success-Response:
 * {
 *        "err": false,
 *        "result": {
 *                     "allergies": [
 *                                    {
 *                                     "dateDiagnosed": "02/09/1992",
 *                                     "allergy": "Rash",
 *                                     "id": "2dd06911-6f73-fc2f-9bda-dc16669c9792",
 *                                     "UpdatedOn": "2016-11-11T12:14:45.422Z"
 *                                    }
 *                                  ]
 *                  }
 * } 
 *
 * 
 *@apiUse patientNotFoundError
 */
function getPatientallergy() { return; }
/**
 * @api {post} /patient/:upin/physician Create a new patient physician
 * @apiVersion 0.1.0
 * @apiName addPatientphysician
 * @apiGroup patient physician
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/physician
 *
 *     body:
 *         {
 *          {
 *           "physician":
 *	                    {
 * 	                     "name": "Trevor",
 *                       "title":"Doctor",
 *                     	 "typeOfCare": "Physician"
 *	                    }
 *         }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name  name of the patient physician.
 * @apiParam {String} title title of the patient physician.
 * @apiParam {String} typeOfCare type of care of patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "ok": 1,
 * "nModified": 1,
 *  "n": 1
 *}
 * @apiError CreatepatientphysicianError Unable to create new patient physician.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientphysicianError"
 *     }
 */
function addPatientphysician() { return; }

/**
 * @api {put} /patient/:upin/physician Change patient physician
 * @apiVersion 0.1.0
 * @apiName updatePatientphysician
 * @apiGroup patient physician
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/physician
 *
 *     body:
 *    {
 *     {
 *           "physician":
 *	                    {
 * 	                     "name": "Trevor",
 *                       "title":"Doctor",
 *                     	 "typeOfCare": "Physician"
 *	                    }
 *         }
 *    }
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name  name of the patient physician.
 * @apiParam {String} title title of the patient physician.
 * @apiParam {String} typeOfCare type of care of patient.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientphysician() { return; }
/**
 * @api {get} /patient/:upin/physician get patient physician information
 * @apiVersion 0.1.0
 * @apiName getPatientphysician
 * @apiGroup patient physician
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {Date} dateDiagnosed   dateDiagnosed of the patient physician.
 * @apiSuccess {String} physician physician of the patient.
 * @apiSuccess {Date} updatedOn physician updated date.
 * @apiSuccessExample {json} Success-Response:
 * {
 *        "err": false,
 *        "result": {
 *           "physician":[
 *	                     {
 * 	                     "name": "Trevor",
 *                       "title":"Doctor",
 *                     	 "typeOfCare": "Physician",
 *                       "id": "c032880a-8fa4-f1f4-39b9-cb103018f222"
 *	                     }
 *                       ]
 *                  }
 * } 
 *
 * 
 *@apiUse patientNotFoundError
 */
function getPatientphysician() { return; }

/**
 * @api {post} /patient/:upin/application Create a new patient application
 * @apiVersion 0.1.0
 * @apiName addPatientapplication
 * @apiGroup patient application
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/application
 *
 *     body:
 *         {
 *          {
 *           "application":
 *	                    {
 * 	                    "name": "NFS 2015",
 *                      "dateRegistered": "02/02/2012"
 *	                    }
 *         }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name  name of the patient application.
 * @apiParam {Date} dateRegistered dateRegistered of the patient application.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "ok": 1,
 * "nModified": 1,
 *  "n": 1
 *}
 * @apiError CreatepatientapplicationError Unable to create new patient application.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientapplicationError"
 *     }
 */
function addPatientapplication() { return; }

/**
 * @api {get} /patient/:upin/application get patient application information
 * @apiVersion 0.1.0
 * @apiName getPatientapplication
 * @apiGroup patient application
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {Date} dateDiagnosed   dateDiagnosed of the patient application.
 * @apiSuccess {String} application application of the patient.
 * @apiSuccess {Date} updatedOn application updated date.
 * @apiSuccessExample {json} Success-Response:
 *{
 *"applications": [
 *     {
 *      "name": "NFS 2015",
 *      "dateRegistered": "02/02/2012"
 *     }
 *   ]
 *}
 *
 * 
 *@apiUse patientNotFoundError
 */
function getPatientapplication() { return; }

/**
 * @api {post} /patient/:upin/appointment Create a new patient appointment
 * @apiVersion 0.1.0
 * @apiName addPatientappointment
 * @apiGroup patient appointment
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/appointment
 *
 *     body:
 *         {
 *          {
 *              "appointment": {
 *              "CanIAddAnything": "Yes"
 *          }
 *   
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} CanIAddAnything  CanIAddAnything of the patient appointment.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientappointmentError Unable to create new patient appointment.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientappointmentError"
 *     }
 */
function addPatientappointment() { return; }

/**
 * @api {put} /patient/:upin/appointment Change patient appointment
 * @apiVersion 0.1.0
 * @apiName updatePatientappointment
 * @apiGroup patient appointment
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/appointment
 *
 *     body:
 *         {
 *          {
 *              "appointment": {
 *              "CanIAddAnything": "Yes"
 *          }
 *   
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} CanIAddAnything  CanIAddAnything of the patient appointment.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientappointment() { return; }
/**
 * @api {get} /patient/:upin/appointment get patient appointment information
 * @apiVersion 0.1.0
 * @apiName getPatientappointment
 * @apiGroup patient appointment
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} upin upin of the patient.
 * @apiSuccess {String} CanIAddAnything  CanIAddAnything of the patient appointment.
 * @apiSuccess {Date} updatedOn appointment updated date.
 * @apiSuccessExample {json} Success-Response:
 * {
 *        "err": false,
 *        "result": {
 *           "appointments":[
 *	                      {
 *                          "CanIAddAnything": "Yes",
 *                          "id": "38814471-b4b1-e4fa-7b7a-da9f25858ef0",
 *                          "UpdatedOn": "2016-11-11T13:07:23.395Z"
 *                        }
 *                         ]
 *                   }
 * } 
 *
 * 
 *@apiUse patientNotFoundError
 */
function getPatientappointment() { return; }

/**
 * @api {post} /patient/:upin/assist Create a new patient assist
 * @apiVersion 0.1.0
 * @apiName addPatientassist
 * @apiGroup patient assist
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/assist
 *
 *     body:
 *         {
 *          {
 *              "assist": {
 *              "CanIAddAnything": "Yes"
 *          }
 *   
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} CanIAddAnything  CanIAddAnything of the patient assist.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientassistError Unable to create new patient assist.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientassistError"
 *     }
 */
function addPatientassist() { return; }


/**
 * @api {get} /patient/:upin/assist get patient assist information
 * @apiVersion 0.1.0
 * @apiName getPatientassist
 * @apiGroup patient assist
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} upin upin of the patient.
 * @apiSuccess {String} CanIAddAnything  CanIAddAnything of the patient assist.
 * @apiSuccessExample {json} Success-Response:
 * {
 *        "err": false,
 *        "result": {
 *           "assists":[
 *	                      {
 *                          "CanIAddAnything": "Yes",
 *                        }
 *                         ]
 *                   }
 * } 
 *
 * 
 *@apiUse patientNotFoundError
 */
function getPatientassist() { return; }

/**
 * @api {post} /patient/:upin/employment Create a new patient employment
 * @apiVersion 0.1.0
 * @apiName addPatientemployment
 * @apiGroup patient employment
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/employment
 *
 *     body:
 *         {
 *          {
 *              "employment": {
 *              "CanIAddAnything": "Yes"
 *          }
 *   
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} CanIAddAnything  CanIAddAnything of the patient employment.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientemploymentError Unable to create new patient employment.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientemploymentError"
 *     }
 */
function addPatientemployment() { return; }

/**
 * @api {put} /patient/:upin/employment Change patient employment
 * @apiVersion 0.1.0
 * @apiName updatePatientemployment
 * @apiGroup patient employment
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/employment
 *
 *     body:
 *         {
 *          {
 *              "employment": {
 *              "name": "permanent"
 *          }
 *   
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name  name of the patient employment.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientemployment() { return; }
/**
 * @api {get} /patient/:upin/employment get patient employment information
 * @apiVersion 0.1.0
 * @apiName getPatientemployment
 * @apiGroup patient employment
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} upin upin of the patient.
 * @apiSuccess {String} name  name of the patient employment.
 * @apiSuccess {String} id id of the patient employment.
 * @apiSuccess {Date} updatedOn employment updated date.
 * @apiSuccessExample {json} Success-Response:
 * {
 * "err": false,
 * "result": {
 *   "employment": [
 *     {
 *       "name": "permanent",
 *       "id": "a026806d-44f2-c7e2-367a-249c505d178e",
 *       "UpdatedOn": "2016-11-21T09:48:23.312Z"
 *     }
 *   ]
 * }
 *}
 *
 *@apiUse patientNotFoundError
 */
function getPatientemployment() { return; }

/**
 * @api {post} /patient/:upin/insurance Create a new patient insurance
 * @apiVersion 0.1.0
 * @apiName addPatientinsurance
 * @apiGroup patient insurance
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/insurance
 *
 *     body:
 *         {
 *          {
 *              "insurance": {
 *              "insuranceCarrier": "xyz",
 *              "isCurrent":true,
 *              "groupID":1
 *          }
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} insuranceCarrier insuranceCarrier of the patient insurance.
 * @apiParam {Boolean} isCurrent isCurrent of the patient insurance.
 * @apiParam {Number} groupID groupID of the patient insurance.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientinsuranceError Unable to create new patient insurance.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientinsuranceError"
 *     }
 */
function addPatientinsurance() { return; }

/**
 * @api {put} /patient/:upin/insurance Change patient insurance
 * @apiVersion 0.1.0
 * @apiName updatePatientinsurance
 * @apiGroup patient insurance
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/insurance
 *
 *     body:
 *         {
 *          {
 *              "insurance": {
 *              "insuranceCarrier": "xyz",
 *              "isCurrent":true,
 *              "groupID":1
 *          }
 *          }
 *        }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} insuranceCarrier insuranceCarrier of the patient insurance.
 * @apiParam {Boolean} isCurrent isCurrent of the patient insurance.
 * @apiParam {Number} groupID groupID of the patient insurance.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientinsurance() { return; }
/**
 * @api {get} /patient/:upin/insurance get patient insurance information
 * @apiVersion 0.1.0
 * @apiName getPatientinsurance
 * @apiGroup patient insurance
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} upin upin of the patient.
 * @apiSuccess {String} insuranceCarrier insuranceCarrier of the patient insurance.
 * @apiSuccess {Boolean} isCurrent isCurrent of the patient insurance.
 * @apiSuccess {Number} groupID groupID of the patient insurance.
 * @apiSuccess {String} id id of the patient insurance.
 * @apiSuccess {Date} updatedOn insurance updated date.
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 * "err": false,
 * "result": {
 *   "insurance": [
 *     {
 *       "insuranceCarrier": "xyz",
 *       "isCurrent": true,
 *       "groupID": 1,
 *       "id": "e25e8008-2b14-e820-101c-07146a704c06",
 *       "UpdatedOn": "2016-11-21T10:09:31.942Z"
 *     }
 *   ]
 * }
 *}
 *
 *@apiUse patientNotFoundError
 */
function getPatientinsurance() { return; }
/**
 * @api {post} /patient/:upin/medicine Create a new patient medicine
 * @apiVersion 0.1.0
 * @apiName addPatientmedicine
 * @apiGroup patient medicine
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/medicine
 *
 *     body:
 *      {
 *	  "medicine":
 *	  {
 *		"name":"iodine",
 *		"isCurrent":true,
 *		"dosage":"1",
 *		"startDate":"02/09/1993",
 *		"endDate":"02/09/1993",
 *		"instructions":"take after lunch",
 *		"medicationType":"tablet",
 *		"frequency":"2 times"
 *	  }
 *   }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name name of the patient medicine.
 * @apiParam {Boolean} isCurrent isCurrent of the patient medicine.
 * @apiParam {String} dosage dosage of the patient medicine.
 * @apiParam {Date} Start date of the patient medicine.
 * @apiParam {Date} End Date of the pateint medicine.
 * @apiParam {String} instructions instructions of the patient.
 * @apiParam {String} medicationType medicationType of the patient.
 * @apiParam {String} frequency frequency of patient medicine.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientmedicineError Unable to create new patient medicine.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientmedicineError"
 *     }
 */
function addPatientmedicine() { return; }

/**
 * @api {put} /patient/:upin/medicine Change patient medicine
 * @apiVersion 0.1.0
 * @apiName updatePatientmedicine
 * @apiGroup patient medicine
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/medicine
 *
 *     body:
 *      {
 *	  "medicine":
 *	  {
 *		"name":"iodine",
 *		"isCurrent":true,
 *		"dosage":"1",
 *		"startDate":"02/09/1993",
 *		"endDate":"02/09/1993",
 *		"instructions":"take after lunch",
 *		"medicationType":"tablet",
 *		"frequency":"2 times"
 *	  }
 *   }
 *
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} name name of the patient medicine.
 * @apiParam {Boolean} isCurrent isCurrent of the patient medicine.
 * @apiParam {String} dosage dosage of the patient medicine.
 * @apiParam {Date} Start date of the patient medicine.
 * @apiParam {Date} End Date of the pateint medicine.
 * @apiParam {String} instructions instructions of the patient.
 * @apiParam {String} medicationType medicationType of the patient.
 * @apiParam {String} frequency frequency of patient medicine.
 * @apiParam {String} upin upin of the patient.
 * @apiParam {String} medicineCarrier medicineCarrier of the patient medicine.
 * @apiParam {Boolean} isCurrent isCurrent of the patient medicine.
 * @apiParam {Number} groupID groupID of the patient medicine.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updatePatientmedicine() { return; }
/**
 * @api {get} /patient/:upin/medicine get patient medicine information
 * @apiVersion 0.1.0
 * @apiName getPatientmedicine
 * @apiGroup patient medicine
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiParam {String} upin upin of the patient.
 * @apiSuccess {String} name name of the patient medicine.
 * @apiSuccess {Boolean} isCurrent isCurrent of the patient medicine.
 * @apiSuccess {String} dosage dosage of the patient medicine.
 * @apiSuccess {Date} Start date of the patient medicine.
 * @apiSuccess {Date} End Date of the pateint medicine.
 * @apiSuccess {String} instructions instructions of the patient.
 * @apiSuccess {String} medicationType medicationType of the patient.
 * @apiSuccess {String} frequency frequency of patient medicine.
 * @apiSuccess {String} upin upin of the patient.
 * @apiSuccess {String} medicineCarrier medicineCarrier of the patient medicine.
 * @apiSuccess {Boolean} isCurrent isCurrent of the patient medicine.
 * @apiSuccess {Number} groupID groupID of the patient medicine.
 * @apiSuccess {String} Id id of the patient medicine.
 * @apiSuccess {Date} UpdatedOn update date of the pateint medicine.
 * @apiSuccessExample {json} Success-Response:
 *{
 * "err": false,
 * "result": {
 *   "medicines": [
 *     {
 *       "name": "iodine",
 *       "isCurrent": true,
 *       "dosage": "1",
 *       "startDate": "02/09/1993",
 *       "endDate": "02/09/1993",
 *       "instructions": "take after lunch",
 *       "medicationType": "tablet",
 *       "frequency": "2 times",
 *       "id": "44927cf7-c460-64fc-b52e-8191d3189f05",
 *       "UpdatedOn": "2016-11-21T10:51:21.375Z"
 *     }
 *    ]
 * }
 *}
 *
 *@apiUse patientNotFoundError
 */
function getPatientmedicine() { return; }
/**
 * @api {post} /patient/:upin/demographic  Create New Demographic
 * @apiVersion 0.1.0
 * @apiName createNewDemographic
 * @apiGroup patient demographic
 * @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/demographic
 *
 *body:
 * {
 *   "demographic": {
 *                     "address": {
 *                                  "addressType": "home",
 *                                  "address1": "First Floor Unit 330, Centennial Park ",
 *                                  "address2": "First Floor Unit 330, Centennial Park ",
 *                                  "city": "Centennial Avenue",
 *                                  "state": "Elstree, Hertfordshire",
 *                                  "zip_code": "SL6 4FJ"
 *                                },
 *                        "phone":{
 *                                  "phoneType": "mobile",
 *                                  "isPrimary": "true",
 *                                  "phoneNumber": "+44-843-354-5555"
 *                                },
 *                        "email":{
 *                                  "emailType": "email",
 *                                  "emailAddress": "xyz@gmail.com",
 *                                  "isPrimary": "true"
 *                                 }
 *                    }
 *  }
 *
 * @apiParam {String} addressType addressType of the patient addresstype .
 * @apiParam {String} address1 address1 of the patient current address.
 * @apiParam {String} address2 address2 of the patient perment address.
 * @apiParam {String} city city of care of patient city.
 * @apiParam {String} state state of the patient state.
 * @apiParam {String} zip_code zip_code of the patient zip_code.
 * @apiParam {String} phoneType phoneType of the patient phoneType.
 * @apiParam {Boolean} isPrimary isPrimary of care of patient phone number is primary or not .
 * @apiParam {String} phoneNumber phoneNumber of the patient phone Number  .
 * @apiParam {String} emailType emailType of the patient email type
 * @apiParam {Email} emailAddress emailAddress of the patient email Id
 * @apiParam {Boolean} isPrimary type of care of patient email is primary or not.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 * "err": false,
 * "result": {
 *   "ok": 1,
 *   "nModified": 1,
 *   "n": 1
 * }
 *}
 * @apiError CreatepatientphysicianError Unable to create new patient physician.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreatepatientphysicianError"
 *     }
 */

function addDemographic() { return; }
/**
 * @api {put} /patient/:upin/demographic Change Patient Demographic
 * @apiVersion 0.1.0
 * @apiName updateDemographic
 * @apiGroup patient demographic
 *  @apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/demographic
 *
 *     body:
 * {
 *   "demographic": {
 *                     "address": {
 *                                  "addressType": "home",
 *                                  "address1": "First Floor Unit 400, Centennial Park ",
 *                                  "address2": "First Floor Unit 400, Centennial Park ",
 *                                  "city": "Centennial Avenue",
 *                                  "state": "Elstree, Hertfordshire",
 *                                  "zip_code": "SL6 4FJ"
 *                                },
 *                        "phone":{
 *                                  "phoneType": "mobile",
 *                                  "isPrimary": "true",
 *                                  "phoneNumber": "+44-843-354-5555"
 *                                },
 *                        "email":{
 *                                  "emailType": "email",
 *                                  "emailAddress": "xyz@gmail.com",
 *                                  "isPrimary": "true"
 *                                 }
 *                    }
 *  }
 *
 * @apiParam {String} addressType addressType of the patient addresstype .
 * @apiParam {String} address1 address1 of the patient current address.
 * @apiParam {String} address2 address2 of the patient perment address.
 * @apiParam {String} city city of care of patient city.
 * @apiParam {String} state state of the patient state.
 * @apiParam {String} zip_code zip_code of the patient zip_code.
 * @apiParam {String} phoneType phoneType of the patient phoneType.
 * @apiParam {Boolean} isPrimary isPrimary of care of patient phone number is primary or not .
 * @apiParam {String} phoneNumber phoneNumber of the patient phone Number  .
 * @apiParam {String} emailType emailType of the patient email type
 * @apiParam {Email} emailAddress emailAddress of the patient email Id
 * @apiParam {Boolean} isPrimary isPrimary type of care of patient email is primary or not.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "err":false,
 * "result":{
 * "ok":1,
 * "nModified":1,
 * "n":1
 * }
 * }
 *@apiUse patientNotFoundError
 */
function updateDemographic() { return; }
/**
 * @api {get} /patient/:upin/demographic get patient demographic information
 * @apiVersion 0.1.0
 * @apiName getDemographic
 * @apiGroup patient demographic
 *@apiHeader {String} Authorization patients unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 *@apiSuccess {String} addressType addressType of the patient addresstype .
 *@apiSuccess {String} address1 address1 of the patient current address.
 *@apiSuccess {String} address2 address2 of the patient perment address.
 *@apiSuccess {String} city city of care of patient city.
 *@apiSuccess {String} state state of the patient state.
 *@apiSuccess {String} zip_code zip_code of the patient zip_code.
 *@apiSuccess {String} phoneType phoneType of the patient phoneType.
 *@apiSuccess {Boolean} isPrimary isPrimary of care of patient phone number is primary or not .
 *@apiSuccess {String} phoneNumber phoneNumber of the patient phone Number  .
 *@apiSuccess {String} emailType emailType of the patient email type
 *@apiSuccess {Email} emailAddress emailAddress of the patient email Id
 *@apiSuccess {Boolean} isPrimary isPrimary type of care of patient email is primary or not.
 *@apiSuccess {Date} UpdatedOn UpdatedOn it shows updated date of the record.
 *@apiSuccessExample {json} Success-Response:
 *{
 *    "err": false,
 *    "result": {
 *        "demographics": [
 *            {
 *                "address": {
 *                    "addressType": "home",
 *                    "address1": "304 Samrat swasitk",
 *                    "address2": "401 sai complex ",
 *                    "city": "Pune",
 *                    "state": "Maharashtra",
 *                    "zip_code": "411041"
 *                },
 *                "phone": {
 *                    "phoneType": "mobile",
 *                    "isPrimary": "true",
 *                    "phoneNumber": "8802492125"
 *                },
 *                "email": {
 *                    "emailType": "email",
 *                    "emailAddress": "xyz@gmail.com",
 *                    "isPrimary": "true"
 *                },
 *                "id": "ef857027-c2f2-1ed0-e73c-c8614f1ebe94",
 *                "UpdatedOn": "2016-11-21T09:38:15.785Z"
 *            },
 *            {
 *                "address": {
 *                    "addressType": "home",
 *                    "address1": "First Floor Unit 330, Centennial Park ",
 *                    "address2": "First Floor Unit 330, Centennial Park ",
 *                    "city": "Centennial Avenue",
 *                    "state": "Elstree, Hertfordshire",
 *                    "zip_code": "SL6 4FJ"
 *                },
 *                "phone": {
 *                    "phoneType": "mobile",
 *                    "isPrimary": "true",
 *                    "phoneNumber": "+44-843-354-5555"
 *                },
 *                "email": {
 *                    "emailType": "email",
 *                    "emailAddress": "xyz@gmail.com",
 *                    "isPrimary": "true"
 *                },
 *                "UpdatedOn": "2016-11-21T10:36:50.845Z"
 *            }
 *        ]
 *    }
 *}
 * 
 *@apiUse patientNotFoundError
 */

function getDemographic() { return; }

/**
 * @api {post} /patient/:upin/vitals create new vital
 * @apiVersion 0.1.0
 * @apiName createviatl
 * @apiGroup patient viatls
 * @apiParam {String} timeoftheday
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/vitals
 *
 *     body:
 *         {
 *          {
 *              "vitals": {
 *              "timeoftheday": "morning",
 *          }
 *          }
 *        }
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *  "err": false,
 *  "result": {
 *    "ok": 1,
 *    "nModified": 1,
 *    "n": 1
 *  }
 *}
 *@apiError CreateVitalError Unable  to create Vital.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 No Content
 *     {
 *       "error": "CreateVitalError"
 *     }
 */
function addvital() { return; }
/**
 * @api {get} /patient/:upin/vitals Request all vital information
 * @apiName GetVitalInformatipon
 * @apiGroup patient viatls
 * @apiVersion 0.1.0
 * @apiHeader {String} Authorization Users unique token. 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.amltbXlraW1tZWxAbGl2ZS5jb21pbG92ZW1hdHRkYW1vbg.-4U_YqoundH6NAWLPUulfwVPF0tHIJux5hNsze6ziK4"
 *     }
 * @apiSuccess {String} morning 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
 *"err": false,
 * "result": {
 *   "vitals": [
 *     {
 *       "timeOfDay": "morning",
 *       "id": "7cf3fb51-4ddb-2abb-fbc9-97906dae0ef5",
 *       "UpdatedOn": "2016-11-21T10:24:02.007Z"
 *     }
 *   ]
 * }
 * }
 *@apiUse patientNotFoundError
 * 
 */
function getvitals() {
    return;
}
/**
 * @api {put} /patient/:upin/vitals Update Vital Information
 * @apiVersion 0.1.0
 * @apiName updateVital
 * @apiGroup patient viatls
 *
 * @apiHeader {String} Authorization Users unique token.
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "eyJhbGciOiJIUzI1NiJ9.aWNoZWFsQGdtYWlsLmNvbXN0YXJr.J1RPypwCq_JAfRq8MWPZXtZPB1arxuk23NY2QIpTtWw"
 *     }
 * @apiParam {String} time  time of the day
 * @apiExample {json} Example usage:
 *     endpoint: http://localhost/patient/:upin/vitals
 *
 *     body:
 *         {
 *          {
 *              "vitals": {
 *              "timeoftheday": "morning",
 *          }
 *          }
 *        } 
 * @apiSuccessExample {json} Success-Response:
 HTTP/1.1 200 OK
 * {
 * "err": false,
 *  "result": {
 *    "ok": 1,
 *    "nModified": 1,
 *    "n": 1
 *  }
 *}
*@apiUse patientNotFoundError
 */
function putvitals() {
    return;
}
