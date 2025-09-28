let express = require("express");
let app = express();
let config = require("dotenv")
config.configDotenv();
let connectDB = require("./config/dbConfig.js");
let productRouter = require("./router/productRouter.js");
let loginRouter = require("./router/loginRouter.js");

// middleware 
app.use(express.json())

let PORT = process.env.PORT;

connectDB();

// provide main path with custom middleware 
// http://localhost:9090/product/*
// user defined middleware 
app.use("/product",productRouter)
app.use("/login",loginRouter);



app.listen(PORT,()=> console.log(`Server running on ${PORT}`))