module.exports = function(db, app) {


    var user = require('../controller/user.js')(db);
    //user
    app.post('/login', user.userLogin);
    app.post('/signup', user.addUser);
    app.post('/getuser', user.getuser);

    //boards
    app.get('/allboards', user.getallboard);
    app.post('/createboard/:id', user.createboard);
    app.get('/getboarddetails', user.getboarddetails);
    app.post('/updateboard', user.updateborad);
    // //lists
    // app.post('/addlist/:id', user.addlist);
    // app.get('/getlists/:id', user.getlists);
    // app.post('/deltelist/:id', user.deletelist);
    // app.post('/updatelist/:id', user.updatelist);

    // //cards
    // app.post('/addcard/:id', user.addcard);
    // app.post('/deletecard/:id', user.deletecard);
    // app.post('/updatecard/:id', user.updatecard);
    // app.post('/dropcard/:id', user.dropcard);

    // //details of card
    // // app.post('/addcomment/:id', user.addcomment);
    // app.post('/addchecklist', user.addchecklist);
    // app.post('/additemtochecklist/:id', user.additemtochecklist);
    // app.get('/getcarddetails/:id', user.getcarddetails);
    // app.post('/changeItemstatus', user.changeItemstatus);

    // //comment
    // app.post('/addcomments', user.addcomments);
    // app.post('/deletecomment/:id', user.deletecomment);
    // app.post('/updatecomment', user.updateComment);

    // //add member
    // app.post('/addmember', user.addmember);

}