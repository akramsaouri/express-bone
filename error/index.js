module.exports = function(app) {

    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        var error = (app.get('env') === 'development') ? err : {};
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: error
        });
    });
}
