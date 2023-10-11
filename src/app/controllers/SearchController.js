const Image = require('../models/Image')

class SearchController {

    // [Get] /search
    index(req, res) {
        // res.render('search')
        Image.find({}, function (err, images) {
            if (!err) res.json(images)
            else res.status(400).json('Errorr')
          });
    }

}

module.exports = new SearchController;