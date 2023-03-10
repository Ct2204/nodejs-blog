const express = require('express')
const morgan = require('morgan')
const handlebar = require('express-handlebars')
const path = require('path');
const { extname } = require('path');


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// http logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebar.engine(
    {extname: '.hbs'}
));
app.set('view engine', 'hbs');
 app.set('views', path.join(__dirname, 'resource/views'));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('new');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})