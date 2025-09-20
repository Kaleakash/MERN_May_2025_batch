let express = require('express');
let app = express();
const PORT = 3000;
let products = [
    {pid:100,pname:"Mobile",price:50000},
    {pid:101,pname:"Computer",price:45000},
    {pid:102,pname:"TV",price:65000}
]
// Get All Products 
// http://localhost:3000/products
app.get("/products",(request,response)=> {
    response.json(products);
})


// search product using pid using query param technique 
// http://localhost:3000/findProductUsingQueryParam?pid=100
app.get("/findProductUsingQueryParam",(request,response)=> {
    let product_id = eval(request.query.pid);
    // if product present it return that product else it return undefined
    let result = products.find(product=>product.pid===product_id);
    if(result==undefined){
        response.send("Product Not Found");
    }else {
        response.json(result);
    }
})
// search product using pid using path param technique 
// http://localhost:3000/findProductUsingPathParam/100
app.get("/findProductUsingPathParam/:pid",(request,response)=> {
    let product_id = eval(request.params.pid);
    // if product present it return that product else it return undefined
    let result = products.find(product=>product.pid===product_id);
    if(result==undefined){
        response.send("Product Not Found");
    }else {
        response.json(result);
    }
})

app.listen(PORT, () =>console.log(`Server is running on http://localhost:${PORT}`));