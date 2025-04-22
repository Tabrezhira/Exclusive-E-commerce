import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// const products = Array.from({ length: 20 }, (_, i) => ({
//     id: i + 1,
//     name: `Premium Product ${i + 1}`,
//     price: (99.99 + i * 10).toFixed(2),
//     image: `https://dummyimage.com/400x400/ddd/000&text=Product+${i + 1}`,
//   rating: (3 + (i % 3)).toFixed(1),
//   brand: "Urban Nomad",
//   category: i % 2 === 0 ? "Backpacks" : "Accessories",
// }));

const MultiProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/product/");
        setProducts(res.data); // store API products in state
        console.log(res.data);
      } catch (err) {
        console.error("Registration failed:", err.response?.data || err.message);
        alert(err.response?.data?.message || "Something went wrong!");
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) =>
          Array.isArray(p.category) ? p.category.includes(selectedCategory) : p.category === selectedCategory
        );

  const clickHandle = (e) => {
          // Navigate and pass state
          navigate('/SingleProduct', { state: e });
  };
  return (
    <div className="min-h-screen relative p-4 md:p-6 lg:p-10 flex flex-col lg:flex-row gap-6">
      {/* Mobile Filter Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileFilterOpen(true)}
      >
        <FiFilter size={24} />
      </button>

      {/* Sidebar Filters (Desktop) */}
      <aside className="hidden lg:block w-72 bg-white p-6 rounded-xl shadow-md h-fit top-20 sticky">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onClose={() => {}}
        />
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-72 bg-white h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onClose={() => setIsMobileFilterOpen(false)}
            />
          </div>
          <div
            className="flex-1"
            onClick={() => setIsMobileFilterOpen(false)}
          ></div>
        </div>
      )}



      {/* Products Grid */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
        <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              onClick={()=>{clickHandle(product)}}
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 relative group overflow-hidden"
            >
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">Brand: {product.brand}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span>{product.rating}</span>
                </div>
                <div className="text-xl font-bold text-blue-600">
                  ${product.price}
                </div>
                <button  className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ selectedCategory, setSelectedCategory, onClose }) => {
  return (
    <div className="space-y-6 text-sm text-gray-700">
      {/* Category Filter */}
      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        <ul className="space-y-2">
          {["All", "Backpacks", "Accessories"].map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => {
                    setSelectedCategory(cat);
                    onClose(); // Close on mobile
                  }}
                  className="accent-blue-600"
                />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-semibold mb-2">Brand</h4>
        <ul className="space-y-2">
          {["Urban Nomad", "Leather Pro", "Explorer Gear"].map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-600" />
                <span>{brand}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Ratings Filter */}
      <div>
        <h4 className="font-semibold mb-2">Rating</h4>
        <ul className="space-y-2">
          {[4, 3, 2].map((stars) => (
            <li key={stars}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-600" />
                <span className="flex items-center gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  & Up
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>
        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="Min"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Max"
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Clear Filters */}
      <div>
        <button
          onClick={() => {
            setSelectedCategory("All");
            onClose(); // Close on mobile
          }}
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default MultiProducts;