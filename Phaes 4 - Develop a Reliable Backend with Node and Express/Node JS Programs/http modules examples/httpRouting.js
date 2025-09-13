let http = require("http");
let url = require("url");
// http://localhost:9090
// http://localhost:9090/home
let server = http.createServer((request,response)=> {
    
    let urlRef = url.parse(request.url,true);
    response.writeHead(200,{"Content-Type":"text/html"});
    if(urlRef.pathname=="/home"){
        response.write("<h1>Welcome to Home Page</h1>");
        response.write("<p>Home Page Description</p>");
        response.end();
    }else if(urlRef.pathname=="/about"){
        response.write("<h1>About Us Page</h1>");
        response.write("<p>About Us page Description</p>");
        response.end();
    }else if(urlRef.pathname=="/contact"){
        response.write("<h1>Contact Us Page</h1>");
        response.write("<p>Contact Us PageDescription</p>");
        response.end();
    }else {
        response.write("<h1>Index Page</h1>");
        response.write("<p>Index Page Description</p>");
        response.end();
    }
    
})


server.listen(9090,()=>console.log("server started on port 9090"));