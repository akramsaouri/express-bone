var mongoose = require('mongoose');

module.exports = {
    connect: function(uri) {
        mongoose.connect(uri);
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
        mongoose.connection.once('open', function(callback) {
            console.log("Connected to Database.")
        })
    }
}
