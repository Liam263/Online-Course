class NewsController {
    //Get /news
    index(req, res) {
        res.render('news');
    }

    //GET /news: slug
    show(req, res) {
        res.send('NEWS DETAIls');
    }
}

module.exports = new NewsController();
