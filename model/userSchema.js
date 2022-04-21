const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    role:String,
})

mongoose.model('netflixlogin',userSchema);
module.exports = mongoose.model('netflixlogin')