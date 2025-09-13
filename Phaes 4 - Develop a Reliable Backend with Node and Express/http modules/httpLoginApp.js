let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((request,response)=> {
    let urlRef = url.parse(request.url,true);
    response.writeHead(200, {"content-type":"text/html"});

    if(urlRef.pathname == "/login") {
        
        let loginPage = fs.readFileSync("login.html"); //readFileSync is used to read the file synchronously
        response.write(loginPage);

    }else if (urlRef.pathname == "/about_us") {
        
        let aboutPage = fs.readFileSync("about.html"); //readFileSync is used to read the file synchronously
        response.write(aboutPage);  

    }else if (urlRef.pathname == "/contact_us") {
        
        let contactPage = fs.readFileSync("contact.html"); //readFileSync is used to read the file synchronously
        response.write(contactPage);  

    }else if (urlRef.pathname == "/services") {
        
        let servicePage = fs.readFileSync("services.html"); //readFileSync is used to read the file synchronously
        response.write(servicePage);  

    }else if(urlRef.pathname == "/SignIn"){
        let data = urlRef.query;    // extract query information from url
       // console.log(data);
       // check hard coding emailId and password for login
       
    //    if(data.email == "akash@gmail.com" && data.password=="1234"){
    //     response.write("<h1> Successfully login</h1>");
    //    }else {
    //     response.write("<h1> Failure try once again </h1>");
    //    }

        // checking emailId and password from login.json file.
        let loginsStringData = fs.readFileSync("login.json", "utf-8");
        let logins = JSON.parse(loginsStringData);  // convert string to json object. JSON.parse is used to convert string to json object.
        let result = logins.find(ll=>ll.email==data.email && ll.password==data.password);
        if(result!=undefined){
            response.write("<h1> Successfully login</h1>");
            response.write("<h3> Welcome user "+result.email+"</h3>");
            let dashboardPage = fs.readFileSync("dashboard.html");
            response.write(dashboardPage);
        }else {
            response.write("<h1> Failure try once again </h1>");
            let loginPage = fs.readFileSync("login.html");
            response.write(loginPage);
        }

        
    }else if(urlRef.pathname == "/signUpPage"){
       
        let signUpPage = fs.readFileSync("signup.html");
        response.write(signUpPage);

    }else if(urlRef.pathname == "/SignUp"){

        let data = urlRef.query;    // extract query information from url and signup page. 
        
        let loginsStringData = fs.readFileSync("login.json", "utf-8");
        let logins = JSON.parse(loginsStringData);  // convert string to json object. JSON.parse is used to convert string to json object.

        if(logins.length==0){
            logins.push(data);
            fs.writeFileSync("login.json", JSON.stringify(logins));
            response.write("<h1>Account Created successfully</h1>");
        }else {
        // find if email already exists in login.json file. it return that object 
        // else it will return undefined.  
            let result = logins.find(ll=>ll.email==data.email);
            if(result==undefined){
                logins.push(data);
                fs.writeFileSync("login.json", JSON.stringify(logins));
                response.write("<h1>Account Created successfully</h1>");
            }else {
                response.write("<h1>Account already exists</h1>");
            }
            
        }
        let signUpPage = fs.readFileSync("signup.html");
        response.write(signUpPage);
       }else {
        let indexPage = fs.readFileSync("index.html"); //readFileSync is used to read the file synchronously
        response.write(indexPage);
    }
    response.end();
});

server.listen(9090, ()=>console.log("Server is running on port number 9090"));


