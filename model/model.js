var mongoose = require('mongoose');
var database = require('../db/db');

var userSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    email: String
});

var User = mongoose.model('user', userSchema);

var model = {
    User: User
};

module.exports = model;
