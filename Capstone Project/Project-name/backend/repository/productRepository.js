let ProductModel = require("../model/productModel.js")

let storeProduct = async(product)=> {    
    let p = new ProductModel(product);
    return await p.save(); 
}

let findAll = async()=> {
    return ProductModel.find();
}

module.exports = {
    storeProduct,
    findAll
}




