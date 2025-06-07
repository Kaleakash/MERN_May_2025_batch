let names=["Rahul","Rohit","Ravi","Rajesh","Ramesh","Jayesh","Rakesh","Ravindra","Rajendra","Ram"];
document.writeln("<h2>Array Callback Function</h2>");
document.writeln(names)
let modifiedNames = names.map(value=>"Mr "+value);  // take value and return modified value
document.writeln("<br>Modified Names: " + modifiedNames);
let upperCaseNames = names.map(value=>value.toUpperCase());  // take value and return modified value
document.writeln("<br>Upper Case Names: " + upperCaseNames);
//let filteredNames = names.filter(value=>value.endsWith("sh"));  // take value and return true or false
let filteredNames = names.filter(value=>value.startsWith("Ro"));  // take value and return true or false

document.writeln("<br>filteredNames: " + filteredNames);
let num = [1,2,3,4,5,6,7,8,9,10];
document.writeln("<br>Numbers: " + num);
let evenNumbers = num.filter(value=>value%2==0)
document.writeln("<br>Even Numbers: " + evenNumbers);
let oddNumbers = num.filter(value=>value%2!=0)
document.writeln("<br>Odd Numbers: " + oddNumbers);
