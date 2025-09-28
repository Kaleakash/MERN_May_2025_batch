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


let updateProductPrice = async(request,response)=> {
    let product = request.body;
    
    try{
    
    let result  = await productRepository.updateProductPrice(product)
    if(result.matchedCount==0){
        response.send("Record not present with pid as "+product.pid+", So didn't update")
    }else if(result.modifiedCount==0){
        response.send("Record didn't update because old price and new price is same")
    }else{
        response.send("Record updated successfully");
    }
    

    }catch(error){
        response.send(error.message)
    }
}

let incrementProductByValue = async(request,response)=> {
    let incrementValue = eval(request.params.incrementValue);
    console.log(incrementValue+100)
    try{
    
    let result  = await productRepository.incrementPriceByValue(incrementValue);
    response.send(result);

    }catch(error){
        response.send(error.message)
    }
}

let decrementProductByValue = async(request,response)=> {
    let decrementValue = eval(request.params.decrementValue);
    
    try{
    
    let result  = await productRepository.decrementPriceByValue(decrementValue)
    response.send(result);

    }catch(error){
        response.send(error.message)
    }
}

let deleteProductUsingPid = async(request,response)=> {
    try{
    let pid = request.params.pid;
    let result  = await productRepository.deleteProductUsingPid(pid);
    if(result.deletedCount==0){
        response.send("product not present")
    }else {
        response.send("Product deleted successfully")
    }
    }catch(error){
        response.send(error.message)
        console.log("error generated")
    }
}

module.exports = {storeProduct,
    findProducts,
    findProductById,
    findProductByPriceValue,
    updateProductPrice,
    incrementProductByValue,  
    decrementProductByValue,
    deleteProductUsingPid
}