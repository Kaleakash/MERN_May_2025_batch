let first = require("./firstFile"); // load firstFile.js 
let second = require("./secondFile"); // load secondFile.js 
let Employee = require("./Employee");

first.display1();
first.display2();

second.display2();
second.display1();

let emp1 = new Employee(100,"John",34);
emp1.displayEmpInfo();