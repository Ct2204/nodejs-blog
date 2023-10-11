const Video = require('../models/Video')
const Course = require('../models/Course')
const {multipleMongooesToObject} = require('../../util/mongooses')
class NewController {

    // [GET] /news
    index(req,res,next ) {
        // res.render('new');
        // Course.find({})
        //     .then(courses => res.render('new', {
        //         courses: multipleMongooesToObject(courses)
        //     }))
        //     .catch(next)
        Course.find({})
            .then(courses => res.render('cart', {
                courses: multipleMongooesToObject(courses)
            }))
            .catch(next)
    }
    // [GEt] /news/:slug 
    show(req, res) {
        res.send('Dieu Mo'
        )
    }
    name(req, res) {
        res.send(' Yeu Dieu Mo'
        )
    }

}


module.exports = new NewController;