let express = require('express');
let app = express();
const PORT = 3000;

// adding middleware 
app.use(express.json()); // to parse json data from request body 
//app.use(express.urlencoded({extended:true})); // to parse form data from request body

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

// store product information in products array variable. 
// http://localhost:3000/storeProduct
// method : post 
// data : {"pid":104,"pname":"AC","price":35000}
app.post("/storeProduct",(request,response)=> {
    let product = request.body;
    console.log(product);
    let result = products.find(p=>p.pid ===product.pid)
    if(result==undefined){
    products.push(product);
    response.send("Product Stored Successfully");
    }else {
        response.send("Product with this pid already present");
    }
})

app.listen(PORT, () =>console.log(`Server is running on http://localhost:${PORT}`));