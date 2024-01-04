const newsRouter = require('./news');
const sitesRouter = require('./sites');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);

    app.use('/courses', courseRouter);

    app.post('/search', function (req, res) {
        console.log(req.body);
        res.send('@@@');
    });

    app.use('/', sitesRouter);

}

module.exports = route;
