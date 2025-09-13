let url = require("url");
let urlInfo = "http://google.com:3000/demo.html?name=amit&age=30";
console.log(urlInfo);       // we get output as string format. 
// it is use to convert string to url object format. 
//let urlRef = url.parse(urlInfo,true);
console.log(urlRef);
console.log(urlRef.protocol);
console.log(urlRef.host);   
console.log(urlRef.port);
console.log(urlRef.pathname);
console.log(urlRef.query);
let queryInfo = urlRef.query;
console.log(queryInfo.name);
console.log(queryInfo.age);