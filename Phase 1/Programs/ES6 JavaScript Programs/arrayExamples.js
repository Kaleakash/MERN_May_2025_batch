let num1=[10,20,30,40,50,60];   // creating literal style 
let num2 = new Array(10,20,30,40,50,60);// creating array using new keyword
document.writeln(num1)      // it display output as string format separated by ,
document.writeln("<br/>")
document.writeln(num2) 
document.writeln("<br/>")
document.writeln("Index position "+num1[0]) // it display first element of array
document.writeln("<br/>")
document.writeln("Index position "+num1[1]) // it display second element of array
document.writeln("<br/>")
document.writeln(num1.join(" ")) 
document.writeln("<br/>")
document.writeln("Size of the array "+num1.length) 
num1.push(1)        // adding the element at last 
num1.push(2)
num1.unshift(100)    // adding the element at first
num1.unshift(200)
document.writeln("<br/>")
document.writeln(num1)
num1.pop()         // removing the last element 2 remove 
num1.shift()       // removing the first element 200 remove 
document.writeln("<br/>")
document.writeln(num1) 