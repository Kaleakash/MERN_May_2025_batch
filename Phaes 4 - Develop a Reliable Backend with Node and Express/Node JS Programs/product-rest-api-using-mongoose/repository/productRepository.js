let ProductModel = require("../model/productModel.js")


let storeProduct = async(product)=> {
    let p = new ProductModel(product);
    return await p.save(); 
}

let findProducts = async()=> {
    return await ProductModel.find();
}


module.exports = {storeProduct,findProducts}