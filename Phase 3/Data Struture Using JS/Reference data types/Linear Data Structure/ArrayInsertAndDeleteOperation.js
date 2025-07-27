let num1=[];
console.log(num1)
num1.push(100);     //100
num1.push(200)      //100,200
num1.push(300);     //100,200,300
num1.unshift(400);  //400,100,200,300
num1.unshift(500);  //500,400,100,200,300
console.log(num1);  //500,400,100,200,300
num1.pop();         // remove last      500,400,100,200
num1.shift();          // remove first  400,100,200
console.log(num1)
let num2 =[1,2,3,4,5,6,7,8,9,10]
console.log("-------------")
console.log(num2)
  // 1st index position, 2nd parameter number of element to remove and 3rd,4th,nth parameter value insert. 
//num2.splice(3,1);       // move 3rd index position and remove that element ie 4 value element 
//num2.splice(3,4);       // from 3rd index position remove 4 element ie 4,5,6,7
//num2.splice(3,0,100)        // move 3rd index position, 0 remove (don't remove any element ) but add 100 on that position 
//num2.splice(3,0,100,200,300)        // move 3rd index position, 0 remove (don't remove any element ) but add 100,200,300 on that position
num2.splice(4,1,500)        // 4th index position replace by 500 value. 
console.log(num2)