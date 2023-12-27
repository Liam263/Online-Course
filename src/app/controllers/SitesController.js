class SitesController {
    //Get /HOME
    home(req, res) {
        res.render('home');
    }

    //GET /news: slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
