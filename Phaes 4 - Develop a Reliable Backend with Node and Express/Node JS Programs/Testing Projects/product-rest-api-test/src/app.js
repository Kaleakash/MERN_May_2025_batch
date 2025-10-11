let express = require("express");

let app = express();
app.use(express.json());
let products=[
    {id:1,name:"mobile",price:20000}
];

// http://localhost:9090/
// method : get 
// response : text message

app.get("/",(request,response)=> {
    response.send("Welcome to Rest API")
})
// http://localhost:9090/products
// method : get
// response : json array of products
app.get("/products",(request,response)=> {
    response.json(products)
})
// http://localhost:9090/store
// method : post
// request : json object of product
// response : text message

app.post("/store",(request,response)=>{
    let product = request.body;
    let newProduct = {
        id:products.length+1,
        name:product.name,
        price:product.price
    }
    products.push(newProduct);
    response.send("Product Stored")
} );
app.listen(9090,()=>console.log("server running on port number 9090"))

module.exports=app;
