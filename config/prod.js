var db = require('./db')

module.exports = function(app) {
    db.connect(proccess.env.DB_PROD_NAME);
}
