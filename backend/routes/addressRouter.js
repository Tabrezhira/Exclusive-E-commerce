const express = require("express");
const router = express.Router();
const {
    createAddress, getAllAddresses, getAddressById, updateAddress, deleteAddress
} = require("../controllers/Address.controller");
const { protect, admin } = require("../middleware/authMiddleware");

// Routes
router.post("/",protect,createAddress); // Add an address and link to user
router.get("/",protect,getAllAddresses); // Get all addresses for a user
router.get('/:id',protect,getAddressById)
router.put("/:id",protect,updateAddress); // Update address
router.delete("/:id",protect,deleteAddress); // Delete address

module.exports = router;
