const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,  
        lowercase: true,
        trim: true,    
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] 
    },
    subscribedAt: {
        type: Date,
        required: true, 
        default: Date.now 
    }
}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;
