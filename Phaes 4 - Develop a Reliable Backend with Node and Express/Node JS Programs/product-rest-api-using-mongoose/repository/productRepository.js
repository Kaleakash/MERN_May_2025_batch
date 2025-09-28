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

let updateProductPrice = async(product)=> {
    return await ProductModel.updateOne({pid:product.pid},{$set:{price:product.price}})
}

let incrementPriceByValue = async(incrementValue)=> {
    return await ProductModel.updateMany({},{$inc:{price:incrementValue}})
}
let decrementPriceByValue = async(decrementValue)=> {
    return await ProductModel.updateMany({},{$inc:{price:-decrementValue}})
}
module.exports = {storeProduct,
    findProducts,
    findProductById,
    findProductByPrice,
    updateProductPrice,
    incrementPriceByValue,
    decrementPriceByValue
    }




