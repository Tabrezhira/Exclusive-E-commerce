import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster, toast } from 'sonner';
import {Provider} from 'react-redux'
import store from '../redux/store'
import UserLayout from '../src/components/Layout/UserLayout'
import Home from '../src/pages/Home'
import ProtectedRoute from '../src/components/Common/ProtectedRoute'
import AdminHome from '../src/components/Admin/AdminHome'
import AdminLayout from '../src/components/Admin/AdminHome'

function App() {


  return (
    <Provider store={store}>
    <BrowserRouter>
    <Toaster position='top-right'/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='collections/:collection' element={<CollectionPage/>}/>
      <Route path='product/:id' element={<ProductDetails/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='order-confirmation' element={<OrderConfirmationPage/>}/>
      <Route path='order/:id' element={<OrderDetailsPages/>}/>
      <Route path='my-orders' element={<MyOrdersPage/>}/> */}
      </Route>
      
      <Route path='/admin' element={<ProtectedRoute role='admin'><AdminLayout/></ProtectedRoute>} >
        <Route index element={<AdminHome/>}/>
        {/* <Route path='users' element={<UserManagement/>}/>
        <Route path='products' element={<ProductManagement/>}/>
        <Route path='products/:id/edit' element={<EditProduct/>}/>
        <Route path='orders' element={<OrderMangement/>}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>

  )
}

export default App
