let express = require("express");
let router = express.Router(); // creating router reference 

let productController = require("../controller/productController.js");
const middleware = require("../middleware/authMiddleware.js");

// method must be post and sub path must be store 

router.post("/store",middleware.verifyToken,productController.storeProduct);
router.get("/find",middleware.verifyToken,productController.findProducts); // added middleware as verifyToken
router.get("/findProductById/:pid",middleware.verifyToken,productController.findProductById);
router.get("/findProductByPrice/:price",middleware.verifyToken,productController.findProductByPriceValue);
router.put("/updateProductPrice",middleware.verifyToken,productController.updateProductPrice);
router.put("/incrementProductPriceByValue/:incrementValue",middleware.verifyToken,productController.incrementProductByValue);
router.put("/decrementProductPriceByValue/:decrementValue",middleware.verifyToken,productController.decrementProductByValue);
router.delete("/deleteProductUsingPid/:pid",middleware.verifyToken,productController.deleteProductUsingPid);
module.exports = router;