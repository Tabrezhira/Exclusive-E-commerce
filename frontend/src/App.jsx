import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup'; 
import AuthLayout from './components/Layout/AuthLayout';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Dashboard from './components/Layout/Dashboard';
import MyProfile from './components/Section/MyProfile';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SingleProductPage from './pages/SingleProductPage';
import MultiProducts from './pages/MultiProducts';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='about' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path="SingleProduct" element={<SingleProductPage/>} />
          <Route path="*" element={<NotFound />} />
          <Route path="MultiProduct" element={<MultiProducts />} />
        </Route>


        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Singup />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>


        {/* Auth Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
