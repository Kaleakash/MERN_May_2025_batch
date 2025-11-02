let express = require("express");
let app = express();
let config = require("dotenv")
config.configDotenv();
let connectDB = require("./config/dbConfig.js");
let cors = require("cors");     // load cors module 

let loginRouter = require("./router/loginRouter.js");
let productRouter = require("./router/productRouter.js");

// middleware 
app.use(express.json())
app.use(cors());

let PORT = process.env.PORT;

connectDB();

// provide main path with custom middleware 
// user defined middleware 

app.use("/login",loginRouter);
app.use("/product",productRouter)


app.listen(PORT,()=> console.log(`Server running on ${PORT}`))