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
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/isAuthenticated");
const { authorizeUser } = require("../middleware/authorizeRole");
const router = express.Router();

router.route("/contact").post(getReview);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:Token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(authorizeUser, getUserDetails);
router.route("/password/update").put(authorizeUser, updatePassword);
router.route("/me/update").put(authorizeUser, updateProfile);

module.exports = router;
 