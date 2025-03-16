const express = require('express');
const router = express.Router();
const {
    createProduct,
    updateProduct,
    deleteProduct,
    allProduct,
    bestSeller,
    newArrivals,
    singleProduct,
    similarProducts
} = require('../controllers/product.controller');

// Middleware for authentication and admin check (if needed)
const { protect, admin } = require('../middleware/authMiddleware');

// Product Routes
router.post('/', protect, admin, createProduct); // Create a new product (Admin only)
router.put('/:id', protect, admin, updateProduct); // Update product (Admin only)
router.delete('/:id', protect, admin, deleteProduct); // Delete product (Admin only)
router.get('/', allProduct); // Get all products with filters
router.get('/best-seller', bestSeller); // Get best-selling product
router.get('/new-arrivals', newArrivals); // Get new arrivals
router.get('/:id', singleProduct); // Get single product by ID
router.get('/similar/:id', similarProducts); // Get similar products

module.exports = router;