let fs = require("fs");
// creating object in literal style 
let employee = {id:100,fname:"John",age:21,salary:45000};
// converting object to string format 
let employeeStringData = JSON.stringify(employee);
fs.writeFileSync("emp.json",employeeStringData);
console.log("Data stored in emp.json file");