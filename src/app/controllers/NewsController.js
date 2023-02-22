
class NewController {

    // [GET] /news
    index(req,res ) {
        res.render('new');
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