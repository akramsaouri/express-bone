var express = require('express');
var app = express();

require('dotenv').config();
require('./config')(app, express);

app.use('/', require('./router/router'));

require('./error')(app);

app.listen(app.get('port'), function() {
    console.log('App running on port: ' + app.get('port'))
})
