let productRepository = require("../repository/productRepository.js");

let storeProduct = async(request,response)=> {
    let product = request.body;
    
    try{
    
    let result  = await productRepository.storeProduct(product);
    //response.send(result);
        if(result!=undefined){
            response.json({msg:"Product Stored successfully"});
        }
    }catch(error){
        response.json({msg:error.message})
    }
}

let findAll = async(request,response)=> {
    
    try{
    
    let result  = await productRepository.findAll();
    response.send(result);

    }catch(error){
        response.send(error.message)
    }
}

module.exports = {
    storeProduct,
    findAll
}