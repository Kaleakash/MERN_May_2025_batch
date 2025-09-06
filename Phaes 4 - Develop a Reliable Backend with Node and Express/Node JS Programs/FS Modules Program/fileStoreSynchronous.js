var fs = require('fs');
var data ="Storing data in file synchronously";
fs.writeFileSync('sample1.txt',data);
console.log("Data Stored Successfully");
console.log("1st task done")
console.log("2nd task done")
console.log("3rd task done")