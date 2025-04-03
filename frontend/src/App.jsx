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
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Singup />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
