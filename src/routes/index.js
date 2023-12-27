const newsRouter = require('./news')
const sitesRouter = require('./sites')
function route(app){

    app.use('/news', newsRouter);
    app.use('/', sitesRouter )
    

    
    app.post('/search', function (req, res) {
        console.log(req.body)
        res.send('@@@') 
    })
  
}

module.exports = route; 