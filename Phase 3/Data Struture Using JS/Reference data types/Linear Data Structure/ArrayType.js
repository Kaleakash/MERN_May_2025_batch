let num1 = [10,20,30,40,50];            // literal style 
let num2 = new Array(10,20,30,40,50);   // creating memory using new keyword with Array object. 
console.log(num1);
console.log(num2);// display elements in string format separated by ,
console.log(num1.join(" "));        // separated by space 

console.log(num1[0])
console.log(num1[1])
console.log(num2[0])

num1.push(100);     // add element in last 
num1.push(200)
num1.unshift(1000)      // add element at begining   
num1.unshift(2000)
console.log(num1)

num1.pop();             // last element remove 
num1.shift();           // first element remove 
console.log(num1)