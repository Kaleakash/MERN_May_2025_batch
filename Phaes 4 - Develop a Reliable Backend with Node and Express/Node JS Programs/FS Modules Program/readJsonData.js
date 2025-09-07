let fs = require("fs");
let data = fs.readFileSync("emp.json");
console.log(data);  // buffer format
let empStringFormat = data.toString();
console.log(empStringFormat); // string format
console.log("id is "+empStringFormat.id); // undefined
let empObjectFormat = JSON.parse(empStringFormat);// converting string to object
console.log("id is "+empObjectFormat.id);
console.log("Fname is "+empObjectFormat.fname);
console.log("Age is "+empObjectFormat.age);
console.log("Salary is "+empObjectFormat.salary);