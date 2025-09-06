var fs = require("fs");
// Asynchronous read
// 1st parameter is file name
// 2nd parameter is callback function with two parameters(error, data)
fs.readFile("sample.txt",(error,data)=> {
    if(error){
        console.log("Error reading file:", error);
    }else {
        //console.log(data); // it display in buffer format
        console.log(data.toString()); // it display in text format
    }
})
console.log("1st Task Completed");
console.log("2nd Task Completed");
console.log("3rd Task Completed");