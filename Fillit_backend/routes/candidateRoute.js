const express = require('express');
const {candidateResponse} = require("../controllers/candidateControllers");
 
//-------- initialize router --------
const router=express.Router();

//-------- While doing test------------
router.route("/candidate").post(candidateResponse);

module.exports=router;


// -------Json------
// use this for post request

// {
//     "name":"Anil Kumar",
//     "email":"akreal@gmail.com"
// }
