const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
        required: true,
    },
    street: {  
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String, 
        required: true,
        match: [/^\d{5,6}$/, "Please enter a valid zip code"], 
    },
    country: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Address', addressSchema);
