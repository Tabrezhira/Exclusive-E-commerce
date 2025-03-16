const Wishlist = require('../models/Wishlist.model');
const Product = require('../models/Product.model');
const mongoose = require('mongoose');

//@route POST /api/wishlist
//@desc Add product to wishlist
//@access Private/User
const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id; // Extracted from auth middleware

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        // Ensure product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Check if wishlist exists for the user
        let wishlist = await Wishlist.findOne({ user: userId });

        if (!wishlist) {
            wishlist = new Wishlist({ user: userId, products: [productId] });
        } else {
            if (wishlist.products.includes(productId)) {
                return res.status(400).json({ message: "Product already in wishlist" });
            }
            wishlist.products.push(productId);
        }

        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//@route GET /api/wishlist
//@desc Get user's wishlist
//@access Private/User
const getWishlist = async (req, res) => {
    try {
        const userId = req.user._id;
        const wishlist = await Wishlist.findOne({ user: userId }).populate('products');

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.json(wishlist);
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//@route DELETE /api/wishlist/:productId
//@desc Remove product from wishlist
//@access Private/User
const removeFromWishlist = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const wishlist = await Wishlist.findOne({ user: userId });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        wishlist.products = wishlist.products.filter(
            (id) => id.toString() !== productId
        );

        await wishlist.save();
        res.json({ message: "Product removed from wishlist", wishlist });
    } catch (error) {
        console.error("Error removing from wishlist:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//@route DELETE /api/wishlist
//@desc Clear entire wishlist
//@access Private/User
const clearWishlist = async (req, res) => {
    try {
        const userId = req.user._id;
        await Wishlist.findOneAndDelete({ user: userId });

        res.json({ message: "Wishlist cleared successfully" });
    } catch (error) {
        console.error("Error clearing wishlist:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = {
    addToWishlist,
    getWishlist,
    removeFromWishlist,
    clearWishlist
};
