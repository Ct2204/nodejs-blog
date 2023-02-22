

class CartController {
    
    // [GET]  /cart
    index(req, res) {
        res.render('cart');
    }
}

module.exports = new CartController;