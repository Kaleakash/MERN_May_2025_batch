let express = require("express");
let router = express.Router(); // creating router reference 

let productController = require("../controller/productController.js");

// method must be post and sub path must be store 

router.post("/store",productController.storeProduct);
router.get("/find",productController.findProducts);
router.get("/findProductById/:pid",productController.findProductById);
router.get("/findProductByPrice/:price",productController.findProductByPriceValue);
router.put("/updateProductPrice",productController.updateProductPrice);
router.put("/incrementProductPriceByValue/:incrementValue",productController.incrementProductByValue);
router.put("/decrementProductPriceByValue/:decrementValue",productController.decrementProductByValue);

module.exports = router;