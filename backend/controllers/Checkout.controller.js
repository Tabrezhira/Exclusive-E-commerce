const Checkout = require('../models/Checkout.model');
const Order = require('../models/Order.model');
const Cart = require('../models/Cart.model');

// @route   POST /api/checkout
// @desc    Create a new checkout session
// @access  Private
exports.createCheckout = async (req, res) => {
    const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({ message: "No items in checkout" });
    }

    try {
        const newCheckout = await Checkout.create({
            user: req.user._id,
            checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus: "Pending",
            isFinalized: false,
        });

        console.log(`Checkout created for user: ${req.user.id}`);
        res.status(201).json(newCheckout);
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @route   PUT /api/checkout/:id/pay
// @desc    Update checkout to mark as paid after successful payment
// @access  Private
exports.updatePaymentStatus = async (req, res) => {
    const { paymentStatus, paymentDetails } = req.body;

    try {
        const checkout = await Checkout.findById(req.params.id);
        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if (paymentStatus === "paid") {
            checkout.isPaid = true;
            checkout.paymentStatus = paymentStatus;
            checkout.paymentDetails = paymentDetails;
            checkout.paidAt = Date.now();

            await checkout.save();
            res.status(200).json(checkout);
        } else {
            res.status(400).json({ message: 'Invalid Payment Status' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @route   POST /api/checkout/:id/finalize
// @desc    Finalize checkout and convert to an order after payment confirmation
// @access  Private
exports.finalizeCheckout = async (req, res) => {
    try {
        const checkout = await Checkout.findById(req.params.id);

        if (!checkout) {
            return res.status(404).json({ message: 'Checkout not found' });
        }

        if (checkout.isPaid && !checkout.isFinalized) {
            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems: checkout.checkoutItems,
                shippingAddress: checkout.shippingAddress,
                paymentMethod: checkout.paymentMethod,
                totalPrice: checkout.totalPrice,
                isPaid: true,
                paidAt: checkout.paidAt,
                paymentDetails: checkout.paymentDetails,
            });

            // Mark the checkout as finalized
            checkout.isFinalized = true;
            checkout.finalizedAt = Date.now();
            await checkout.save();

            // Delete the user's cart after finalizing the order
            await Cart.findOneAndDelete({ user: checkout.user });

            res.status(201).json(finalOrder);
        } else if (checkout.isFinalized) {
            res.status(400).json({ message: 'Checkout already finalized' });
        } else {
            res.status(400).json({ message: 'Checkout is not paid' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
