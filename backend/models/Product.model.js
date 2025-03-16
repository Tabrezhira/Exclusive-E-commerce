const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    images: {
        type: [String] // Array of image URLs
    },
    discountPrice: {
        type: Number,
        default: 0
    },
    sku: {
        type: String,
        unique: true,
        required: true
    },
    brand: [{
        type: String,

        required: true
    }],
    sizes: {
        type: [String]
    },
    colors: {
        type: [String]
    },
    collections: {
        type: [String]
    },
    material: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unisex']
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String]
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: [String]
    },
    dimensions: {
        type: String
    },
    weight: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
