const express = require("express");
const {
    registerUser,
    loginUser,
    createGuestUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    logoutUser,
    mergeGuestIntoUser
} = require("../controllers/User.controller");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/guest", createGuestUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete("/:id", protect, admin, deleteUser);
router.post("/logout", logoutUser);
router.put('/merge',protect,mergeGuestIntoUser)

module.exports = router;
