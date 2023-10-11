const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Video = new Schema({
    video: { type: String, default:'ILY'}
})

module.exports = mongoose.model('Video',Video)