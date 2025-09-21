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



app.listen(3000,()=>console.log("Server is running on port 3000"));  // start the server and listen on port 3000