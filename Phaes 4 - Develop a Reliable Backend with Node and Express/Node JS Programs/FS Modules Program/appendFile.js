var fs = require("fs");
let data = "Third Information";
fs.appendFile("sample2.txt", data, (err) => {
    if (err) throw err;
    console.log("Data is appended to file");
})
console.log("1st Task Completed");
console.log("2nd Task Completed");
console.log("3rd Task Completed");