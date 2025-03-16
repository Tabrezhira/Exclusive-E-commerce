const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    name:String,
    image:String,
    price: {
        type: Number, // Changed from String to Number
        required: true,
    },
    size:String,
    color:String,
    quantity: {
        type: Number,
        default: 1,
    }
},{_id:false})

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    guestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guest',
    },
    products: [cartItemSchema],
    totalPrice: {
        type: Number,
        default: 0, // Removed required:true (not necessary)
    }
}, { timestamps: true });


module.exports = mongoose.model("Cart", cartSchema)