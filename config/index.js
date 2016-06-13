var express = require('express');

module.exports = function(app) {

    var path = require('path');
    var bodyParser = require('body-parser');

    // Global Configs
    app.set('views', path.join(__dirname, '../views')); // views engine
    app.set('view engine', 'ejs'); // views engine template
    app.set('port', process.env.PORT || 3000); // port


    // Middlewares
    // [Optional] app.use(require('serve-favicon')(path.join(__dirname, '../public', 'favicon.ico')));
    app.use(require('morgan')('dev')); // morgan logging
    app.use(bodyParser.json()); // body parser
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(require('cookie-parser')()); //cookie parser
    app.use(express.static(path.join(__dirname, '../public'))); // static files
    app.use(require('express-session')({ // http session
        secret: 'SecretKat',
        resave: true,
        saveUninitialized: true
    }));
    app.use(require('connect-flash')()); // flash session

    app.set('env', 'dev'); // env : dev || prod
}
