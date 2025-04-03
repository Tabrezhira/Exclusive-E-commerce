import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="flex items-center justify-center  bg-white">
        <div className="flex flex-col lg:flex-row shadow-lg overflow-hidden max-w-7xl w-full h-auto">
            {/* Left Side (Image) */}
            <div className="hidden lg:flex lg:w-1/2 h-auto">
                <img src="https://www.figma.com/file/wV68pVwBNSmbmZi7trYvzD/image/75f394c0a1c7dc5b68a42239311e510f54d8cd59" alt="Shopping" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Side (Login Form) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center lg:text-left">Log in to Exclusive</h2>
                <p className="text-gray-500 mb-6 sm:mb-10 text-center lg:text-left text-lg">Enter your details below</p>
                
                <div className="space-y-6">
                    <div className="flex items-center border-b-2 py-3 focus-within:border-black">
                        <FaEnvelope className="text-gray-400" size={22} />
                        <input type="email" placeholder="Email or Phone Number" className="w-full ml-3 outline-none py-2 text-lg" />
                    </div>
                    <div className="flex items-center border-b-2 py-3 focus-within:border-black">
                        <FaLock className="text-gray-400" size={22} />
                        <input type="password" placeholder="Password" className="w-full ml-3 outline-none py-2 text-lg" />
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0">
                    <button className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-red-600">Log In</button>
                    <a href="#" className="text-red-500 text-lg hover:underline">Forget Password?</a>
                </div>
                
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-lg">Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    </div>
);
};


export default Login