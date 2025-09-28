let ProductModel = require("../model/productModel.js")


let storeProduct = async(product)=> {
    let p = new ProductModel(product);
    return await p.save(); 
}

let findProducts = async()=> {
    return await ProductModel.find();
}

let findProductById = async(pid)=> {
    return await ProductModel.findOne({pid:pid})
}
let findProductByPrice = async(priceValue)=> {
    return await ProductModel.find({price:{$gt:priceValue}})
}

module.exports = {storeProduct,findProducts,findProductById,findProductByPrice}