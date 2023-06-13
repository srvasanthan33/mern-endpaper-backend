const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    total:{
        type:Number
    }
})

module.exports = mongoose.model('cartModel',cartSchema)