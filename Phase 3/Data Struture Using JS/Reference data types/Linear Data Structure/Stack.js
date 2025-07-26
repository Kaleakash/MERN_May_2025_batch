class Stack {

    constructor() {
        this.stack=[];      // empty stack array created... stack is array variable 
    }

    size() {
        return this.stack.length;           // it provide number of item or data 
    }

    isEmpty() {
        return this.stack.length==0;  // ==0 return true or false. 
    }
    
    push(element){
        if(this.stack.length<5){
            this.stack.push(element);           // push array element 
            return "Element added in stack as "+element
        }else {
            return "Stack Overflow"
        }  
    }
    pop(){
        if(ss.isEmpty()){
            return "Stack is empty, Under flow" 
        }else {
            let topMostElement = this.stack.pop();  //pop of array element 
            return topMostElement;
        }
    }
    peek(){
        if(ss.isEmpty()){
            return "Stack is empty, Under flow" 
        }else {
            let topElement = this.stack[this.stack.length-1];// 3-1 get position of top most element 
            return topElement;
        }
    }
}
let ss = new Stack();       // memory created constructor get call there i created array with stack 
    console.log(ss.size())              // 0
    console.log("Is Empty : "+ss.isEmpty()) // true 

            console.log(ss.pop());          // under flow because it is empty 
            console.log("Push operation "+ss.push(100));
            console.log("Push operation "+ss.push(200));
            console.log("Push operation "+ss.push(300));
            console.log("Push operation "+ss.push(400));
            console.log("Push operation "+ss.push(500));

            console.log("Push operation "+ss.push(600));        // overflow 

console.log(ss.size())      // size 5 
console.log("Is Empty : "+ss.isEmpty())     // false 
console.log("Pop operation "+ss.pop())           // remove 500 
console.log("After pop operation")
console.log("size "+ss.size())          // size 4 
console.log("Peek operation "+ss.peek())    // top most element 400 
console.log("size "+ss.size())      // size 4