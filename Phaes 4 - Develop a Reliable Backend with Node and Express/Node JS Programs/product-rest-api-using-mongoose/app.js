let express = require("express");
let app = express();
let config = require("dotenv")
config.configDotenv();

let PORT = process.env.PORT;







app.listen(PORT,()=> console.log(`Server running on ${PORT}`))