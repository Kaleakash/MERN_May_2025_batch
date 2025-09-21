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

// view product using _id ie product from mongo db database 
// http://localhost:3000/searchProductById/
// method : get 
app.get("/searchProductById/:id",(request,response)=> {
    let id = new mongodb.ObjectId(request.params.id); // converting string id to ObjectId
    db.collection("Products").findOne({_id:id}).then(product=> {
        if(product==null){
                response.send("Product not found with id: "+id);
        }else {
              response.json(product); // send the product as JSON response
        }
    }).catch(error=> {
        response.send(error)
    })
})

// update product price using _id from database. 
// http://localhost:3000/updateProductPrice
// method : put 
// data : {_id:"64a7f0f5e1b1c8b1a1a1a1a", price:45000}
app.put("/updateProductPrice",(request,response)=> {
    let product = request.body; // get product data from request body _id and price
    let id = new mongodb.ObjectId(product._id); // converting string id to ObjectId
    let newPrice = product.price; // get new price from request body
    db.collection("Products").updateOne({_id:id},{$set:{price:newPrice}}).then(result=> {
        //response.send(result);
        if(result.matchedCount==0){
            response.send("Product not found with id: "+product._id);
        }else if(result.modifiedCount==0){
            response.send("Product price is already "+newPrice);
        }else {
            response.send("Product price updated successfully for id: "+product._id);
        }
    }).catch(error=> {
        response.send(error)
    })
})
// delete product using _id from database. 
// http://localhost:3000/deleteProductUsingId/64a7f0f5e1b1c8b1a1a1a1a
// method : delete 
app.delete("/deleteProductUsingId/:id",(request,response)=> {
    let id = new mongodb.ObjectId(request.params.id); // converting string id to ObjectId
    db.collection("Products").deleteOne({_id:id}).then(result=> {
        //response.send(result);
        if(result.deletedCount==0){
            response.send("Product not found with id: "+id);
        }else {
            response.send("Product deleted successfully with id: "+id);
        }
    }).catch(error=> {
        response.send(error);
    })
})
app.listen(3000,()=>console.log("Server is running on port 3000"));  // start the server and listen on port 3000