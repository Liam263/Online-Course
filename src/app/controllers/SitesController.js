const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');


class SitesController {
    //Get /HOME
    async home(req, res, next) {
        // const courses = await Course.find({})
        // res.json(courses)
        // res.render('home');

        await Course.find({})
            .then(courses => {
                res.render('home',
                 {courses: multipleMongooseToObject(courses)})
            })    
            .catch(next)
        
    }

    //GET /news: slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
