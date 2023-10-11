const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Image = new Schema({
 img: {type:String,default:'Le Cong Thuong'}
});


module.exports = mongoose.model('Image', Image);