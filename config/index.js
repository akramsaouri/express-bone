module.exports = function(app, express) {

    var path = require('path');
    var bodyParser = require('body-parser');

    // Global Configs
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.set('port', process.env.PORT || 3000);


    // Middlewares
    // [Optional] app.use(require('serve-favicon')(path.join(__dirname, '../public', 'favicon.ico')));
    app.use(require('morgan')('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(require('cookie-parser')());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(require('express-session')({
        secret: 'SecretKat',
        resave: true,
        saveUninitialized: true
    }));
    app.use(require('connect-flash')());

    app.get('env','dev'); // env : dev || prod
}
