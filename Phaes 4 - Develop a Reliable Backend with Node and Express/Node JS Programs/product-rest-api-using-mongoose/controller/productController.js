let productRepository = require("../repository/productRepository.js");

let storeProduct = async(request,response)=> {
    let product = request.body;
    
    try{
    
    let result  = await productRepository.storeProduct(product);
    response.send(result);

    }catch(error){
        response.send(error.message)
    }
}

let findProducts = async(request,response)=> {

    try{
    
    let result  = await productRepository.findProducts();
    response.json(result)

    }catch(error){
        response.send(error.message)
    }
}

let findProductById = async(request,response)=> {
    try{
    let pid = request.params.pid;
    let result  = await productRepository.findProductById(pid)
    if(result==null){
        response.send("Product details not present with id as "+pid)
    }else {
        response.json(result)
    }
    }catch(error){
        response.send(error.message)
    }
}
let findProductByPriceValue = async(request,response)=> {
    try{
    let priceValue = request.params.price;
    let result  = await productRepository.findProductByPrice(priceValue);
    if(result.length==0){
        response.send("No product present with price > "+priceValue)
    }    else {
        response.json(result)
    }
    }catch(error){
        response.send(error.message)
    }
}


module.exports = {storeProduct,findProducts,findProductById,findProductByPriceValue}