const mongoose = require("mongoose")
const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    },
})
const User = mongoose.model('user',UserSchema)
// creating index bcz we want unique value of email so use indexes->mongo but it creates indexes
// User.createIndexes()
module.exports = User