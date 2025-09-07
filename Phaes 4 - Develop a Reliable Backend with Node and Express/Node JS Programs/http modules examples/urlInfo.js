let url = require("url");
let websiteName ="http://www.myweb.com:8080/index.html?id=1&name=john";
console.log(websiteName);       // string format 
let urlObj = url.parse(websiteName,true);  // true for query object
console.log(urlObj);    // object of url which provide lot of function help to extra information from url
console.log(urlObj.host);   // www.myweb.com:8080
    console.log(urlObj.pathname);   // /index.html
console.log(urlObj.search);   // ?id=1&name=john
console.log(urlObj.query.id);   // 1
console.log(urlObj.query.name); // John
console.log(urlObj.protocol); // http:
console.log(urlObj.port); // 8080
