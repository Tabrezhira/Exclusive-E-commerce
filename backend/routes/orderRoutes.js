const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getMyOrders, getOrderById } = require('../controllers/Order.controller');

const router = express.Router();

router.get('/my-orders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;
