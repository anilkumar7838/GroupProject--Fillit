const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logout,
  updatePassword,
  updateProfile,
  getUserDetails,
  getReview,
} = require("../controllers/userControllers");
const { isAuthenticatedUser } = require("../middleware/isAuthenticated");
const router = express.Router();

router.route("/contact").post(getReview);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:Token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
 