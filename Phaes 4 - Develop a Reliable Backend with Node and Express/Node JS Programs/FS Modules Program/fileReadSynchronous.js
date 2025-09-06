var fs = require("fs");
try{
var data = fs.readFileSync('sample2.txt');
console.log(data);  // display in buffer format
console.log(data.toString()); // display in string format
}catch(error){
    console.log("Error reading file:", error.message);
}

console.log("1st task done")
console.log("2nd task done")
console.log("3rd task done")