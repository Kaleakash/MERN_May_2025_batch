var fs = require("fs");
var data = fs.readFileSync('sample1.txt');
console.log(data);  // display in buffer format
console.log(data.toString()); // display in string format
console.log("1st task done")
console.log("2nd task done")
console.log("3rd task done")