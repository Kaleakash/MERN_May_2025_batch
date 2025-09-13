let http = require("http");
let querystring = require("querystring");
let url = require("url");
let fs = require("fs");
let server = http.createServer((request,response) => {
    //console.log(request.method)   
    let urlInfo = url.parse(request.url, true);
    if(urlInfo.pathname === "/") {
        let loginPage = fs.readFileSync("loginWithPost.html");
        response.write(loginPage);
    }else{
    if(request.method === "POST" && urlInfo.pathname === "/signIn") {
    console.log("POST request");
    let body ="";
    request.on("data", (chunk) => {
     console.log("chunk", chunk); //to get the data from the body
    body += chunk;
    });
    request.on("end", () => {
            console.log("body", body); //to get the data from the body
            //let data = JSON.parse(body);
            let data = querystring.parse(body); 
            // converting query string into object format. 
            console.log("data", data); //to get the data from the body
            if(data.email === "akash@gmail.com" && data.password === "123") {
                console.log("success")
                response.write("<h1>Successfully login!</h1>");
                response.end();
            }else { 
                console.log("failure")
                response.write("<h1>Login Failed!</h1>");
                response.end();
            }
    });

    }
} 
   
});


server.listen(9191, () => {
    console.log("Server is running on port 9191");
})