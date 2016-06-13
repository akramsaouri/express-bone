var express = require('express');
var app = express();

require('dotenv').config();
require('./config')(app); // main config file
require('./config/' + app.get('env'))(app); // env config file

app.use('/', require('./router/router')); // router

require('./error')(app); // error hanlder

app.listen(app.get('port'), function() {
    console.log('App running on port: ' + app.get('port'))
});
