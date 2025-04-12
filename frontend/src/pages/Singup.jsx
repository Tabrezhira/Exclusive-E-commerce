import React, { useState } from 'react'
import mobile from '.././assets/dl.beatsnoop 1.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios'
function Singup() {
    const [formData, setFormData] = useState({
        Name:"",
        Email:"",
        Password:""
    })
    const navigate = useNavigate()
    const submitForm = async (e) => {
        
        e.preventDefault();

        const { Name, Email, Password } = formData;
    
        if (!Name || !Email || !Password) {
          alert("Please fill in all fields.");
          return;
        }
    
        try {
          const res = await axios.post('http://localhost:9000/api/users/register', {
            name: Name,
            email: Email,
            password: Password,
            mobile : 9825533013,
          });
          console.log('Registration success:', res.data);
          alert("Account created successfully!");
          navigate("/")
        } catch (err) {
          console.error('Registration failed:', err.response?.data || err.message);
          alert(err.response?.data?.message || "Something went wrong!");
        }
      }
  return (
    <div className="flex items-center justify-center  bg-white">
        <div className="flex flex-col lg:flex-row shadow-lg overflow-hidden max-w-7xl w-full h-auto">
            {/* Left Side (Image) */}
            <div className="hidden lg:flex lg:w-1/2 h-auto">
                <img src="https://www.figma.com/file/wV68pVwBNSmbmZi7trYvzD/image/75f394c0a1c7dc5b68a42239311e510f54d8cd59" alt="Shopping" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Side (Login Form) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center lg:text-left">Create an account</h2>
                <p className="text-gray-500 mb-6 sm:mb-10 text-center lg:text-left text-lg">Enter your details below</p>
                
                <div className="space-y-6">
                    <div className="flex items-center border-b-2 py-3 focus-within:border-black">
                        <FaEnvelope className="text-gray-400" size={22} />
                        <input onChange={(e) => setFormData({ ...formData, Name: e.target.value })} type="text" placeholder="Name" className="w-full ml-3 outline-none py-2 text-lg" />
                    </div>
                    <div className="flex items-center border-b-2 py-3 focus-within:border-black">
                        <FaEnvelope className="text-gray-400" size={22} />
                        <input onChange={(e) => setFormData({ ...formData, Email: e.target.value })} type="email" placeholder="Email or Phone Number" className="w-full ml-3 outline-none py-2 text-lg" />
                    </div>
                    <div className="flex items-center border-b-2 py-3 focus-within:border-black">
                        <FaLock className="text-gray-400" size={22} />
                        <input onChange={(e) => setFormData({ ...formData, Password: e.target.value })} type="password" placeholder="Password" className="w-full ml-3 outline-none py-2 text-lg" />
                    </div>
                </div>
                
                <div className="sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
                    <button onClick={submitForm} className="min-w-full my-2 sm:w-auto bg-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-red-600">Sign Up</button>
                    <button className="min-w-full flex items-center justify-center gap-4 sm:w-auto border-2 border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-red-600"><FaGoogle /> Sign up with Google</button>
                </div>
                
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-lg">Already have account?  <Link to="/auth" className="text-blue-500 hover:underline">Log in</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Singup