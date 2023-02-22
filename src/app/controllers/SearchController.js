

class SearchController {

    // [Get] /search
    index(req, res) {
        res.render('search')
    }

}

module.exports = new SearchController;