const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const cartController = require('../controllers/cart.controller')

router.post('/', cartController.addToCart);
router.put('/', cartController.updateCart);
router.delete('/', cartController.deleteFromCart);
router.get('/', cartController.getCartDetails);
router.post('/merge', protect, cartController.mergeCart);

module.exports = router;
