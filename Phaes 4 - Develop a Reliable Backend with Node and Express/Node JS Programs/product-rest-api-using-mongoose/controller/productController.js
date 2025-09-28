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

module.exports = {storeProduct,findProducts}