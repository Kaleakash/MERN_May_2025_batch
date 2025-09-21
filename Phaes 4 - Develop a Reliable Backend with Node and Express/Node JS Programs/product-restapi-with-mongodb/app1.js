let express = require("express");  // load the express module
let mongodb = require("mongodb");  // load the mongodb module
let dotenv = require("dotenv"); // load the dotenv module 
    dotenv.config(); // configure dotenv to read .env file
let app = express();  // create an express module instance  or reference 
// middleware to parse JSON bodies
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

let db; // database reference

// to Connect mongo db database 
mongodb.MongoClient.connect(MONGO_URI).then(client=>{
    db = client.db(DB_NAME);
    console.log("Connected to Mongo db Database");
}).catch(error=>console.error("Error while connecting to database:", error));

app.listen(PORT,()=>console.log("Server started at port:",PORT));