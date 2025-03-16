const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const {connectDB} = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require('./routes/uploadRouter')
const addressRoutes = require('./routes/addressRouter')
const subscriberRoutes = require('./routes/subscriberRouter')
const productRoutes = require('./routes/productRouter')
const wishlistRoutes = require('./routes/wishlistRoutes')
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const orderRoutes = require('./routes/orderRoutes');
app.use(express.json())
app.use(cors())

dotenv.config()
const Port = process.env.PORT || 3000;
// Connect 
connectDB()

app.get('/', (req,res) => {
    res.send('Welcome to Rabbit API!')
})

// API Routes
app.use("/api/users", userRoutes);
app.use('/api/upload', uploadRoutes) // upload files and img
app.use('/api/address' ,addressRoutes )
app.use('/api/subscriber',subscriberRoutes)
app.use('/api/product',productRoutes)
app.use('/api/wishlist',wishlistRoutes)
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/order', orderRoutes);






app.listen(Port,()=>{
    console.log(`Server is running on http://localhost:${Port}`)
})

// module.exports = app;   //unmask for Vercel only 