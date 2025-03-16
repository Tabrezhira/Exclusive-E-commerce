const asyncHandler = require("express-async-handler");
const Subscriber = require('../models/Subscriber.model'); // Correct import

const createSubscriber = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
        return res.status(400).json({ message: "Email already subscribed" });
    }

    // Create and save new subscriber
    await Subscriber.create({ email });

    res.status(201).json({ message: 'Successfully subscribed to the newsletter!' });
});

module.exports = createSubscriber;
