const asyncHandler = require("express-async-handler");
const Address = require("../models/address.model");
const User = require("../models/User.model");

// Create a new address
const createAddress = asyncHandler(async (req, res) => {
    const { houseNo, street, city, state, zipCode, country } = req.body;
    const userId = req.user.id;

    if (!houseNo || !street || !city || !state || !zipCode || !country || !userId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const address = await Address.create({ houseNo, street, city, state, zipCode, country });
    user.address.push(address._id);
    await user.save();

    res.status(201).json({ message: "Address created successfully", address });
});

// Get all addresses
const getAllAddresses = asyncHandler(async (req, res) => {
    const addresses = await Address.find();
    res.status(200).json(addresses);
});

// Get a single address by ID
const getAddressById = asyncHandler(async (req, res) => {
    const address = await Address.findById(req.params.id);

    if (!address) {
        return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json(address);
});

// Update an address
const updateAddress = asyncHandler(async (req, res) => {
    const address = await Address.findById(req.params.id);

    if (!address) {
        return res.status(404).json({ message: "Address not found" });
    }

    // Extract current address fields and update only provided fields
    const updatedData = {
        houseNo: req.body.houseNo || address.houseNo,
        street: req.body.street || address.street,
        city: req.body.city || address.city,
        state: req.body.state || address.state,
        zipCode: req.body.zipCode || address.zipCode,
        country: req.body.country || address.country,
    };
    console.log(updatedData)
    // Update the address
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, updatedData, { new: true, runValidators: true });

    res.status(200).json({ message: "Address updated successfully", updatedAddress });
});


// Delete an address
const deleteAddress = asyncHandler(async (req, res) => {
    const userId = req.user.id;// Get the logged-in user ID

    // Find the user
    const user = await User.findById(userId);

    if (!user) {
        return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    // Check if the address exists in the user's addresses array
    if (!user.address.includes(req.params.id)) {
        return res.status(401).json({ message: "Unauthorized: Address not linked to user" });
    }

    // Remove the address reference from the User model
    await User.findByIdAndUpdate(
        userId,
        { $pull: { address: req.params.id } },
        { new: true }
    );

    // Delete the address from the database
    await Address.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Address deleted successfully" });
});


module.exports = { createAddress, getAllAddresses, getAddressById, updateAddress, deleteAddress };
