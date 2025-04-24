import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaHeart, FaEye, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
const product = {
  title: "Premium Leather Backpack",
  brand: "Urban Nomad",
  price: 129.99,
  originalPrice: 159.99,
  rating: 4.6,
  reviewsCount: 214,
  stock: "In Stock",
  delivery: "Get it by Monday, April 8",
  returnPolicy: "30-day return policy available.",
  warranty: "1-Year Limited Warranty",
  colors: ["#3B3B3B", "#8B4513", "#B22222"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  specs: {
    Dimensions: "18 x 12 x 6 inches",
    Weight: "2.2 lbs",
    Material: "Genuine Leather",
    Color: "Vintage Brown",
  },
  highlights: [
    "100% genuine premium leather",
    "Fits up to 17-inch laptops",
    "Multiple compartments with secure zippers",
    "Water-resistant inner lining",
    "Ergonomic padded shoulder straps",
  ],
  description:
    "This premium leather backpack from Urban Nomad blends modern design with exceptional functionality. Crafted for professionals and explorers, it offers ample storage, secure zippers, and unmatched comfort.",
  images: [
    "https://dummyimage.com/700x700/cccccc/000000&text=Product+Image+1",
    "https://dummyimage.com/700x700/cccccc/000000&text=Product+Image+2",
    "https://dummyimage.com/700x700/cccccc/000000&text=Product+Image+3",
    "https://dummyimage.com/700x700/cccccc/000000&text=Product+Image+4",
    "https://dummyimage.com/700x700/cccccc/000000&text=Product+Image+8",
  ],
};

const recommendedItems = [
    { id: 1, name: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, discount: "-35%", rating: 5, img: "https://dummyimage.com/400x400/ddd/000" },
    { id: 2, name: "IPS LCD Gaming Monitor", price: 1160, rating: 5, img: "https://dummyimage.com/400x400/ddd/000" },
    { id: 3, name: "HAVIT HV-G92 Gamepad", price: 560, rating: 5, img: "https://dummyimage.com/400x400/ddd/000" },
    { id: 4, name: "AK-900 Wired Keyboard", price: 200, rating: 5, discount: "-10%", img: "https://dummyimage.com/400x400/ddd/000" },
    { id: 5, name: "Wireless Gaming Mouse", price: 400, rating: 5, img: "https://dummyimage.com/400x400/ddd/000" },
  ];

function SingleProductPage() {
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const recommendedRef = useRef(null);
    
      const scroll = (ref, direction) => {
        if (ref.current) {
          ref.current.scrollBy({ left: direction * 300, behavior: "smooth" });
        }
      };

      const location = useLocation(); // ✅ call it here
      const receivedData = location.state;
    
      useEffect(() => {
        console.log('Received data:', receivedData);
        // Do something with receivedData
      }, [receivedData]);



    return (
      <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span className="hover:underline cursor-pointer text-blue-600">Account</span> /{" "}
        <span className="hover:underline cursor-pointer text-blue-600">Backpack</span> /{" "}
        <span className="text-gray-800 font-medium">{product.title}</span>
      </div>
  
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    
       {/* Left: Image + Thumbs */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 lg:top-10">
          {/* Thumbnails - show horizontally below on mobile */}
          <div className="flex sm:block gap-3 sm:space-y-3 mt-4 sm:mt-0 justify-center">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer transition ${
                  mainImage === img ? "border-blue-600" : "border-gray-300"
                } hover:border-blue-500`}
              />
            ))}
          </div>
  
          {/* Main Image */}
          <div className="overflow-hidden shadow group relative flex-1 max-h-[500px]">
            <img
              src={mainImage}
              alt="Main product"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
  
  
        {/* Right: Product Info */}
        <div className="space-y-2">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-sm text-gray-500 mt-1">Brand: {product.brand}</p>
          </div>
  
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400 text-lg">★ {product.rating}</span>
            <span className="text-gray-600">({product.reviewsCount}+ reviews)</span>
          </div>
  
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-2xl sm:text-3xl font-bold text-blue-700">${product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through text-lg sm:text-xl">${product.originalPrice.toFixed(2)}</span>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </div>
  
          <p className="text-green-600 font-medium">{product.stock}</p>
  
          {/* Color */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Color:</h4>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform hover:scale-110 ${
                    selectedColor === color ? "border-blue-600" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
  
          {/* Size */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Size:</h4>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-200"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
  
          {/* Quantity */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Quantity:</h4>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 p-2 rounded-md w-24 sm:w-28"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
  
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 my-6">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold shadow-md transition">
              🛒 Add to Cart
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition">
              🚀 Buy Now
            </button>
          </div>
  
          {/* Info */}
          <div className="bg-gray-50 p-4 rounded-lg border text-sm space-y-2">
            <p><span className="font-semibold">📦 Delivery:</span> {product.delivery}</p>
            <p><span className="font-semibold">↩️ Return:</span> {product.returnPolicy}</p>
            <p><span className="font-semibold">🛡 Warranty:</span> {product.warranty}</p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold mb-2">📝 Description</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
          </div>
        </div>
        </div>
                <div className="flex items-center justify-between mt-20 mb-4">
                  <h2 className="text-2xl font-semibold flex items-center">
                    <span className="h-4 w-1 bg-red-500 mr-2"></span> Related Items
                  </h2>
                  <div className="flex gap-2">
                    <button onClick={() => scroll(recommendedRef, -1)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                      <FaChevronLeft className="text-gray-600 text-xl" />
                    </button>
                    <button onClick={() => scroll(recommendedRef, 1)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                      <FaChevronRight className="text-gray-600 text-xl" />
                    </button>
                  </div>
                </div>
        
                <div className="relative overflow-x-auto scrollbar-hide no-scrollbar" ref={recommendedRef}>
                  <div className="flex gap-x-4 w-full">
                    {recommendedItems.map((item) => (
                      <div key={item.id} className="w-[300px] flex-shrink-0 shadow-md relative bg-white hover:shadow-lg transition rounded-lg overflow-hidden">
                        {/* Discount & Tag Badges */}
                        {item.discount && (
                          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded shadow-md z-10 opacity-100">
                            {item.discount}
                          </span>
                        )}
                        {item.tag && (
                          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-semibold rounded shadow-md z-10 opacity-100">
                            {item.tag}
                          </span>
                        )}
                        {/* Product Image */}
                        <div className="relative group">
                          <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
                          <button className="
                            hidden lg:flex absolute left-0 right-0 bottom-0 
                            bg-black lg:bg-opacity-50 
                            text-white py-2 text-sm font-semibold 
                            items-center justify-center opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300
                            ">
                            Add To Cart
                        </button>
                        </div>
                        {/* Details */}
                        <div className="p-3">
                            <h3 className="text-sm font-medium mt-1">{item.name}</h3>
                            <p className="text-red-500 font-semibold text-lg mt-1">
                                ${item.price}{" "}
                                {item.oldPrice && <span className="line-through text-gray-400 text-sm ml-1">${item.oldPrice}</span>}
                            </p>
                            {/* ⭐ Rating Restored */}
                            <div className="flex items-center mt-2 text-yellow-500 text-sm">
                                {"⭐".repeat(item.rating)}
                                <span className="ml-1 text-xs text-gray-500">(65)</span>
                            </div>
                            {/* Eye Icon */}
                      <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                          <FaHeart className="text-gray-600" />
                        </button>
                        <button className="absolute top-12 right-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                          <FaEye className="text-gray-600" />
                        </button>
                            <div className="mt-4 lg:hidden">
                            <button className="w-full bg-black text-white py-2 rounded text-sm font-semibold hover:bg-black transition">
                            Add To Cart
                            </button>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
               
        
        
              
      </div>
      
    );
  };
  
  

export default SingleProductPage

