const express = require('express')
const morgan = require('morgan')
const handlebar = require('express-handlebars')
const path = require('path');
const { extname } = require('path');
const { query } = require('express');
const route = require('./routes')
const db = require('./config/db')
const imgdb = require('./config/db/imagedb')
const videodb = require('./config/db/videodb')
//Conect db

imgdb.connect();
db.connect();

videodb.connect();

const app = express()
const port = 3000

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

// http logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebar.engine(
    {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


//route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})