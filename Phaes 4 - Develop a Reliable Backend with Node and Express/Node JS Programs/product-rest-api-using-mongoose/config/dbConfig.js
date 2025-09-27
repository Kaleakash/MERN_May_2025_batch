let mongoose = require("mongoose");
let dotenv = require("dotenv")
dotenv.configDotenv();

let MONGO_DB_URL=process.env.MONGO_DB_URL

let ConnectDB = async () => {
try{
await mongoose.connect(MONGO_DB_URL);
console.log("Database Connected ")
}catch(error){
    console.log(error.message)
}

}

module.exports = ConnectDB;


