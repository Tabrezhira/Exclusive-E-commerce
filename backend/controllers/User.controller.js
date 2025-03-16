const User = require("../models/User.model");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const sendEmail = require('../mail/mail')
const Guest = require('../models/Guest.model')

// Generate JWT Token
const generateToken = (userId) => {
    try {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
    } catch (error) {
        console.error("JWT Error:", error.message);
        return null;
    }
};

// @desc   Register a new user
// @route  POST /api/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, mobile, role } = req.body;

    // Validate required fields
    if (!name || !email || !password || !mobile) {
        res.status(400);
        throw new Error("All fields (name, email, password, mobile) are required.");
    }

    // Check if user already exists (email & mobile)
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User with this email already exists.");
    }

    const mobileExists = await User.findOne({ mobile });
    if (mobileExists) {
        res.status(400);
        throw new Error("Mobile number already in use.");
    }

    // Set default role
    const userRole = role || "customer"; 



    const user =  User({ name, email, password, mobile, role : userRole});
    const payload = {user: {id: user._id, role: user.role}}
    const token = generateToken(payload);

    if (!token) {
        res.status(500);
        throw new Error("Failed to generate authentication token.");
    }
    
    await user.save()

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});


// @desc   Login user & get token
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// @desc   Create Guest User
// @route  POST /api/users/guest
// @access Public
const createGuestUser = asyncHandler(async (req, res) => {
    const newGuest = await Guest.create({ role: "guest" });

    res.status(201).json({
        _id: newGuest.id,
    });
});

// @desc   Get user profile
// @route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = req.user;

    if (user) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc   Update user profile
// @route  PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.mobile = req.body.mobile || user.mobile;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            token: generateToken(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc   Delete user account
// @route  DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    if (userId) {
        await User.findByIdAndDelete(userId)
        res.json({ message: "User removed" });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

// @desc   Logout user
// @route  POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logged out successfully" });
});

const mergeGuestIntoUser = asyncHandler(async (req, res) => {
    const { guestId } = req.body; // Get guest and user IDs
    const userId = req.user.id;

    if (!guestId || !userId) {
        return res.status(400).json({ message: "Guest ID and User ID are required" });
    }

    // Find the guest and user in the database
    const guest = await Guest.findById(guestId);
    const user = await User.findById(userId);

    if (!guest) {
        return res.status(404).json({ message: "Guest account not found" });
    }

    if (!user) {
        return res.status(404).json({ message: "User account not found" });
    }

    // Here, merge any necessary guest data into the user account
    // Example: If the guest had items in a cart, transfer them
    if (guest.cartItems) {
        user.cartItems = user.cartItems.concat(guest.cartItems);
    }

    // Save the updated user
    await user.save();

    // Delete the guest account after merging
    await Guest.findByIdAndDelete(guestId);

    res.status(200).json({ message: "Guest data merged into user account successfully", user });
});


module.exports = {
    registerUser,
    loginUser,
    createGuestUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    logoutUser,
    mergeGuestIntoUser
};
