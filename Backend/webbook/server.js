const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSanitizer = require("express-sanitizer");
const session = require('express-session');
const passport = require('passport');

app.use('/assets', express.static('assets'));
app.use('/views', express.static('views'));
//app.use(bodyParser.json());
//app.use(bodyParser.json(), bodyParser.urlencoded({extended : true}));
//app.use(expressValidator());

/*
// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions
*/

app.listen(port, function(err){
    if(!err){
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else{
        console.log(err);
    }
});

app.use(cors());
app.use(cookieParser());
app.use(expressSanitizer());
app.use(expressValidator());

module.exports = app;
require('./loader.js');
require("./routes/main.route.js");
require("./controllers/partner.controller.js");
require("./controllers/operational.controller.js");
require("./controllers/request.controller.js");
require("./controllers/occurrence.controller.js");
require("./controllers/centralist.controller.js");
require("./controllers/management.controller.js");
require("./controllers/help_request.controller.js");
require("./controllers/login.controller.js");