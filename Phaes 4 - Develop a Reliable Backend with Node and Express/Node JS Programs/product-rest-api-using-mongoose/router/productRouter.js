let express = require("express");
let router = express.Router(); // creating router reference 

let productController = require("../controller/productController.js");

// method must be post and sub path must be store 

router.post("/store",productController.storeProduct);
router.get("/find",productController.findProducts);


module.exports = router;