const Checkout = require('../models/Checkout.model');
const Order = require('../models/Order.model');
const Cart = require('../models/Cart.model');
const Address = require('../models/Address.model')

// @route   POST /api/checkout
// @desc    Create a new checkout session
// @access  Private
exports.createCheckout = async (req, res) => {
    const { cartId, addressId, paymentMethod } = req.body;

    if (!cartId || !addressId) {
        return res.status(400).json({ message: "cartId and addressId are required" });
    }

    try {
        // Fetch cart data
        const cart = await Cart.findById(cartId);
        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: "Cart is empty or not found" });
        }

        // Fetch address data
        const address = await Address.findById(addressId);
        if (!address) {
            return res.status(400).json({ message: "Address not found" });
        }

        // Transform cart products to match checkout schema
        const checkoutItems = cart.products.map(item => ({
            productId: item.productId,
            name: item.name,
            image: item.image || "default-image.jpg", // Ensure image is provided
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            color: item.color
        }));

        const shippingAddress = {
            address:`${address.houseNo} ${address.street}`,
            city: address.city,
            postalCode: address.zipCode,
            country: address.country,
        }

        // Create checkout
        const newCheckout = await Checkout.create({
            user: req.user._id,
            checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice: cart.totalPrice,
            paymentStatus: "Pending",
            isFinalized: false,
        });

        // Delete cart after successful checkout
        await Cart.findByIdAndDelete(cartId);

        console.log(`Checkout created for user: ${req.user.id}`);
        res.status(201).json(newCheckout);
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ message: "Server Error" });
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
            await Checkout.findByIdAndUpdate(req.params.id);

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
