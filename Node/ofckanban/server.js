// server.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
    return function(req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}

app.use(forceSSL());
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on port:" + port);
});