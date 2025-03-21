import React from 'react'
import { LiaLocationArrowSolid } from "react-icons/lia";

function Footer({children}) {
  return (
<div className="min-h-screen flex flex-col">
{/* Main Content */}
<main className="flex-grow">{children}</main>

{/* Footer */}
<footer className="bg-black text-white mt-auto">
  <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-5 gap-6">
    {/* Exclusive Section */}
    <div>
      <h2 className="text-xl font-bold">Exclusive</h2>
      <p className="mt-2">Subscribe</p>
      <p className="text-sm text-gray-400">Get 10% off your first order</p>
      <div className="mt-3 flex items-center border rounded-md overflow-hidden">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 bg-black text-white w-full outline-none"
        />
        <button className="p-2 bg-white text-black">➤</button>
      </div>
    </div>

    {/* Support Section */}
    <div>
      <h3 className="text-lg font-semibold">Support</h3>
      <p className="text-sm text-gray-400">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p className="text-sm mt-1">exclusive@gmail.com</p>
      <p className="text-sm mt-1">+88015-88888-9999</p>
    </div>

    {/* Account Section */}
    <div>
      <h3 className="text-lg font-semibold">Account</h3>
      <ul className="text-sm text-gray-400 space-y-1 mt-2">
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-lg font-semibold">Quick Link</h3>
      <ul className="text-sm text-gray-400 space-y-1 mt-2">
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Download App Section */}
    <div>
      <h3 className="text-lg font-semibold">Download App</h3>
      <p className="text-sm text-gray-400">Save $3 with App New User Only</p>
      <div className="mt-2 flex gap-2">
        <img src="https://dummyimage.com/100x40/fff/000&text=Google+Play" alt="Google Play" />
        <img src="https://dummyimage.com/100x40/fff/000&text=App+Store" alt="App Store" />
      </div>
      <div className="mt-3 flex gap-3 text-lg">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="border-t border-gray-700 text-center text-sm py-3">
    © Copyright Rimel 2022. All rights reserved.
  </div>
</footer>
</div>
);
};

export default Footer