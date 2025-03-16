const Product = require('../models/Product.model');
const mongoose = require('mongoose');



//@route POST /api/products
//@desc Create a new Product
//@access Private/Admin


const createProduct = async (req, res) => {
    try {
        const {
            name, description, price, discountPrice, stock,
            category, brand, sizes, colors, collections, material,
            gender, images, isFeatured, isPublished, tags,
            dimensions, weight, sku,metaKeywords,rating,numReviews
        } = req.body;
        const userId = req.user.id;

        // Validation: Ensure required fields are provided
        if (!name || !description || !sku || !category || !stock) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if (!Array.isArray(category) || !Array.isArray(sizes) || !Array.isArray(colors) || !Array.isArray(collections) || !Array.isArray(tags) || !Array.isArray(brand)) {
            return res.status(400).json({ message: "Invalid data format: category, sizes, colors, collections, tags, and brand should be arrays" });
        }

        // Creating new product
        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            stock, 
            category,
            brand, 
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
            metaKeywords,rating,numReviews,
            createBy:userId
        });

        // Save product to DB
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);

    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//@route PUT /api/products/:id
//@desc Update an existing product
//@access Private/Admin

const updateProduct = async (req, res) => {
    try {
        const {
            name, description, price, discountPrice, stock,
            category, brand, sizes, colors, collections, material,
            gender, images, isFeatured, isPublished, tags,
            dimensions, weight, sku,metaKeywords,rating,numReviews
        } = req.body;

        // Find product by ID
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Ensure array fields are properly formatted
        if (category && !Array.isArray(category)) return res.status(400).json({ message: "Category must be an array" });
        if (brand && !Array.isArray(brand)) return res.status(400).json({ message: "Brand must be an array" });
        if (sizes && !Array.isArray(sizes)) return res.status(400).json({ message: "Sizes must be an array" });
        if (colors && !Array.isArray(colors)) return res.status(400).json({ message: "Colors must be an array" });
        if (collections && !Array.isArray(collections)) return res.status(400).json({ message: "Collections must be an array" });
        if (tags && !Array.isArray(tags)) return res.status(400).json({ message: "Tags must be an array" });
        if (metaKeywords && !Array.isArray(metaKeywords)) return res.status(400).json({ message: "metaKeywords must be an array" });
        // Update product fields only if new values are provided
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.discountPrice = discountPrice || product.discountPrice;
        product.stock = stock || product.stock;  // Fixed field name
        product.category = category || product.category;
        product.brand = brand || product.brand;
        product.sizes = sizes || product.sizes;
        product.colors = colors || product.colors;
        product.collections = collections || product.collections;
        product.material = material || product.material;
        product.gender = gender || product.gender;
        product.images = images || product.images;
        product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
        product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
        product.tags = tags || product.tags;
        product.dimensions = dimensions || product.dimensions;
        product.weight = weight || product.weight;
        product.sku = sku || product.sku;
        product.rating = rating || product.rating;
        product.numReviews = numReviews || product.numReviews;
        product.metaKeywords = metaKeywords || product.metaKeywords


        // Save updated product
        const updatedProduct = await product.save();

        res.status(200).json(updatedProduct);

    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


//@route DELETE /api/products/:id
//@desc Delete an existing product by ID
//@access Private/Admin

const deleteProduct = async (req, res) => {
    try {
        // Find the Product by ID
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await product.deleteOne();
        res.json({ message: "Product removed successfully" });

    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


//@route GET /api/products
//@desc Get all products with optional query filters
//@access Public

const allProduct = async (req, res) => {
    try {
        const { 
            collections, sizes, colors, gender, minPrice, maxPrice, 
            sortBy, search, category, material, brand, limit, page 
        } = req.query;

        let query = {};

        // Filter logic
        if (collections && collections.toLowerCase() !== "all") {
            query.collections = collections;
        }
        if (category && category.toLowerCase() !== "all") {
            query.category = { $in: category.split(',') };
        }
        if (material) {
            query.material = { $in: material.split(',') };
        }
        if (brand) {
            query.brand = { $in: brand.split(',') };
        }
        if (sizes) {
            query.sizes = { $in: sizes.split(',') };
        }
        if (colors) {
            query.colors = { $in: colors.split(',') };
        }
        if (gender) {
            query.gender = gender;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // Search logic
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }

        // Sorting logic
        let sort = { createdAt: -1 }; // Default: Newest products first
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sort = { price: 1 };
                    break;
                case "priceDesc":
                    sort = { price: -1 };
                    break;
                case "popularity":
                    sort = { rating: -1 };
                    break;
                default:
                    break;
            }
        }

        // Pagination logic
        const pageNumber = Number(page) || 1;
        const limitNumber = Number(limit) || 10;
        const skip = (pageNumber - 1) * limitNumber;

        // Fetch products with sorting, pagination, and filtering
        const products = await Product.find(query)
            .sort(sort)
            .limit(limitNumber)
            .skip(skip);

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


//@route GET /api/products/best-seller
//@desc Retrieve the product with highest rating
//@access Public

const bestSeller =async (req, res) => {
    try {
        // Fetch the best seller: highest-rated & published product with reviews
        const bestSeller = await Product.findOne({ 
            isPublished: true, 
            numReviews: { $gt: 0 } 
        }).sort({ rating: -1 });

        if (!bestSeller) {
            return res.status(404).json({ message: "No best seller found" });
        }

        res.json(bestSeller);
    } catch (error) {
        console.error("Error fetching best-seller:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

 
//@route GET /api/products/new-arrivals
//@desc Retrieve latest 9 products - Creation date
//@access Public

const newArrivals = async (req, res) => {
    try {
        // Fetch latest 9 published products
        const newArrivals = await Product.find({ isPublished: true })
            .sort({ createdAt: -1 })
            .limit(9);

        if (!newArrivals.length) {
            return res.status(404).json({ message: "No new arrivals found" });
        }

        res.json(newArrivals);
    } catch (error) {
        console.error("Error fetching new arrivals:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


//@route GET /api/products/:id
//@desc Get a single product by ID
//@access Public

const singleProduct =  async (req, res) => {
    try {
        // Validate ObjectId format to prevent server crashes
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        // Find product by ID
        const product = await Product.findById(req.params.id);

        // If no product found
        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        // If the product is not published, restrict access for non-admin users
        if (!product.isPublished && (!req.user || !req.user.isAdmin)) {
            return res.status(403).json({ message: "This product is not available" });
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};




//@route GET /api/products/similar/:id
//@desc Retrieve similar products based on the current product's gender and category
//@access Public

const similarProducts = async (req, res) => {
    const { id } = req.params;

    try {
        // Validate ObjectId format to prevent server crashes
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        // Find the current product
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Query for similar products
        const query = {
            _id: { $ne: id }, // Exclude the current product
            gender: product.gender,
            category: { $in: product.category }, // Match any of the categories
            isPublished: true, // Ensure only published products are shown
        };

        // If the user is an admin, allow fetching unpublished products
        if (req.user && req.user.isAdmin) {
            delete query.isPublished;
        }

        const similarProducts = await Product.find(query).limit(4);
        res.json(similarProducts);
    } catch (error) {
        console.error("Error fetching similar products:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};






module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    allProduct,
    bestSeller,
    newArrivals,
    singleProduct,
    similarProducts
}
