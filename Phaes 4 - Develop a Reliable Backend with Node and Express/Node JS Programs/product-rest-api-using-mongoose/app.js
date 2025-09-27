let express = require("express");
let app = express();
let config = require("dotenv")
config.configDotenv();
let connectDB = require("./config/dbConfig.js");

let PORT = process.env.PORT;

connectDB();





app.listen(PORT,()=> console.log(`Server running on ${PORT}`))