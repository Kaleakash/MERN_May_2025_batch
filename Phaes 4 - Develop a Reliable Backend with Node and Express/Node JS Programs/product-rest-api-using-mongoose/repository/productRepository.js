let ProductModel = require("../model/productModel.js")


let storeProduct = async(product)=> {
    let p = new ProductModel(product);
    return await p.save(); 
}


module.exports = {storeProduct}