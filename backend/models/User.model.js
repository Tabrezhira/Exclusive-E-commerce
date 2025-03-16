const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: "Please enter a valid email address",
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    mobile: {
        type: Number,
        unique: true,
        sparse: true, // Allows multiple `null` values
        validate: {
            validator: function (v) {
                return !v || /^\d{10}$/.test(v.toString());
            },
            message: "Please enter a valid 10-digit mobile number",
        },
    }
}, { timestamps: true });

// **Pre-save Hook for Password Hashing**
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try {
            const salt = await bcrypt.genSalt(12);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

// **Method to Compare Passwords**
userSchema.methods.matchPassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
