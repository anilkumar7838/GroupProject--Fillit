const express=require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// router.route("/password/forgot").post(loginUser);
// router.route("/password/update").post(loginUser);
// router.route("/password/reset/:id").post(loginUser);

module.exports=router;