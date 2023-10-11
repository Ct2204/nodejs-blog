const Course = require('../models/Course')
const { multipleMongooesToObject} = require('../../util/mongooses')
class CartController {
    
    // [GET]  /cart
    index(req, res,next) {
        Course.find({})
            .then(courses => res.render('cart', {
                courses: multipleMongooesToObject(courses)
            }))
            .catch(next)
    }
    //Get //:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => { res.json(course) })
            .catch(next)
    }
}

module.exports = new CartController;