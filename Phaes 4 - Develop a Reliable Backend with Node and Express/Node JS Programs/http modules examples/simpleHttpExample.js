let http = require("http");     // load the module 
// create server object
// http://localhost:9090    
let server = http.createServer((request,response)=> {

    response.end("Welcome to Node JS http module")
})
// bind server to port number
server.listen(9090,()=>console.log("Server is running on port number 9090"))