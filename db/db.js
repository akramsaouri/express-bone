var database = require('mongoose');

var dbname = '<dbname>';

var url = 'mongodb://localhost/' + dbname;

database.connect(url, function (err) {
    if (err) console.log(err);
    else {
        console.log('Connected with ' + dbname + ' Mongo db');
    }
});
