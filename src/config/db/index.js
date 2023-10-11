const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log("Connect sucessfuly")
    } catch (error) {
        console.log("Fail")
    }
}



module.exports = {connect}