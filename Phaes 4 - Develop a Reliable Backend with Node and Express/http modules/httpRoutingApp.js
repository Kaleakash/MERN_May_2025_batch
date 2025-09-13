let http = require("http");
let url = require("url");

// http://localhost:9090

let server = http.createServer((request,response)=> {
    let urlRef = url.parse(request.url,true);
    response.writeHead(200, {"content-type":"text/html"});// set response format as html
    //console.log(urlRef);
    if(urlRef.pathname =="/about_us") {
       // response.end("<h2>Welcome to About Us page</h2>");
       response.write("<h2>About Us Page Description</h2>");
       response.write("<p>Welcome to About Us page</p>");
    }
    else if(urlRef.pathname =="/contact_us") {
        //response.end("Welcome to Contact Us page");
        response.write("<h2>Welcome to Contact Us Page</h2>");
       response.write("<p>Contact Us Page Description</p>");
    }else if(urlRef.pathname =="/services") {
        //response.end("Welcome to Services page");
        response.write("<h2>Welcome to Service Page </h2>");
       response.write("<p>Welcome to Service Page Description</p>");
    }else {
        response.write("<h2>Welcome to Home Page</h2>");
        response.write("<p>Welcome to Home Page Description</p>");
        //response.end("Welcome to Index Page");
    }
    response.end();
})

server.listen(9090,()=> {
    console.log("server started on port 9090");
})