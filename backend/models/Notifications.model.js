const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', // Correct reference
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['whatsapp', 'email', 'sms'], // Corrected enum values
        required: true,
    },
    isRead: {  // Fixed syntax
        type: Boolean,
        default: false,
    },
    createdAt: { // Fixed field name
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
