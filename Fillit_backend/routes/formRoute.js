const express = require('express');
const { createForms, getAllForms,updateForm,deleteForm,getFormDetails } = require('../controllers/formController');
const router = express.Router();

router.route("/form").get(getAllForms);
router.route("/form/new").post(createForms); // if you want change the route ("/form") 
router.route("/form/:id").put(updateForm).delete(deleteForm).get(getFormDetails);

module.exports = router;

// -------Api calls-----

// post --> http://localhost:8000/v1/form/new
// get --> http://localhost:8000/v1/form
// put --> http://localhost:8000/v1/form/write your own id from mongoDatabase
// delete --> http://localhost:8000/v1/form/write your own id from mongoDatabase
// get --> http://localhost:8000/v1/form/write your own id from mongoDatabase

// ------for post request {Creation of Form}----

// {
//     "formtype":"Q/A",
//     "title":"ST-1",
//     "description":"Nothing",
//     "user":"61d8695e0dbda5d78846a96d"
// }