let express = require("express");
let app = express();
app.use(express.json());
let products=[];

// http://localhost:9090/

app.get("/",(request,response)=> {
    response.send("Welcome to Rest API")
})
app.get("/products",(request,response)=> {
    response.json(products)
})
app.post("/store",(request,response)=>{
    let product = request.body;
    let newProduct = {
        id:products.length+1,
        name:product.name,
        price:product.price
    }
    products.push(newProduct);
    response.send("Product Stored")
} )
app.listen(9090,()=>console.log("server running on port number 9090"))

module.exports = app;

