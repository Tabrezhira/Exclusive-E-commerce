const express = require('express');
const {
    createCheckout,
    updatePaymentStatus,
    finalizeCheckout
} = require('../controllers/Checkout.controller');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createCheckout);
router.put('/:id/pay', protect, updatePaymentStatus);
router.post('/:id/finalize', protect, finalizeCheckout);

module.exports = router;
