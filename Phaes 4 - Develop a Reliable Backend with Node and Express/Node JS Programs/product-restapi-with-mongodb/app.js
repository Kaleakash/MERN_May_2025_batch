let express = require("express");  // load the express module
let mongodb = require("mongodb");  // load the mongodb module

let app = express();  // create an express module instance  or reference 

// middleware to parse JSON bodies
app.use(express.json());

let db; // database reference

// to Connect mongo db database 
mongodb.MongoClient.connect("mongodb://localhost:27017").then(client=>{
    db = client.db("mern_2025_batch");
    console.log("Connected to Mongo db Database");
}).catch(error=>console.error("Error while connecting to database:", error));

// store Product in mongo db database using express 
// http://localhost:3000/storeProduct
// method : post 
// data : {pname:"TV","price":56000}
app.post("/storeProduct",(request,response)=> {
    let product = request.body; // get product data from request body
    db.collection("Products").insertOne(product).then(result=> {
        //response.send(result); // send the result back to client
        if(result.acknowledged){
            response.send("Product stored with id: "+result.insertedId);
        }else {
            response.send("Error while storing product");
        }
    }).catch(error=> {
        response.send(error)
    })
}) 

// view all product from mongo db database using express
// http://localhost:3000/viewProducts
// method : get

app.get("/viewProducts",(request,response)=> {
    db.collection("Products").find().toArray().then(products=> {
        response.json(products); // send the products array as JSON response
    }).catch(error=> {
        response.send(error)
    })
})


app.listen(3000,()=>console.log("Server is running on port 3000"));  // start the server and listen on port 3000