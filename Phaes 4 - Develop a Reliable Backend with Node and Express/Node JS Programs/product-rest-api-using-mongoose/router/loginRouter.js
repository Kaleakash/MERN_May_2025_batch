let express = require("express");
let router = express.Router(); // creating router reference 

let loginController = require("../controller/loginController.js");

// method must be post and sub path must be store 

router.post("/signUp",loginController.signUp);
router.post("/signIn",loginController.signIn);

module.exports = router;