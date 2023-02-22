const newsRouter = require('./news')
const searchRouter = require('./search')
const cartRouter = require('./cart')
function route(app) {

    app.use('/news', newsRouter);

    app.use('/search', searchRouter);
    
    app.use('/cart', cartRouter);
    
    app.get('/', (req, res) => {
        res.render('home');
    })
    

    
   
    
    // app.get('/search', (req, res) => {
        
    //     res.render('search');
    // })
    
   
    

}

module.exports = route;