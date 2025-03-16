const express = require('express');
const { addToWishlist, getWishlist, removeFromWishlist, clearWishlist } = require('../controllers/Wishlist.controller');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addToWishlist);
router.get('/', protect, getWishlist);
router.delete('/:productId', protect, removeFromWishlist);
router.delete('/', protect, clearWishlist);

module.exports = router;
