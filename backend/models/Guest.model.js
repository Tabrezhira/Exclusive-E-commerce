const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["guest"], // Restrict role to "guest" only
        default: "guest"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest;