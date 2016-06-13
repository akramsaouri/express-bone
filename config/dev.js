var db = require('./db')

module.exports = function(app) {
    db.connect(process.env.DB_DEV_NAME);
}
