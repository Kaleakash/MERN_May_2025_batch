class Queue {
    constructor() { // this.variable names means that variable is a part of that object ie instance variable. 
        this.queue = [];            // queue is array type 
    }
  
    size() {
        return this.queue.length;       // length pre defined property to check the size 
    }
    isEmpty() {
        return this.queue.length==0;
    }
    enqueue(element){
        this.queue.push(element);
        return "element added in queue as "+element;
    }
    dequeue() {
        if(this.queue.isEmpty){
            return "Queue is empty"
        }else {
            return this.queue.shift();  // it is us to remove first element from array 
        }
    }
    peek() {
        return this.isEmpty() ? "Queue is empty " : this.queue[0]; 
    }
}

let qq = new Queue();
console.log("Queue size "+qq.size())
console.log("Queue is empty "+qq.isEmpty())
console.log("Peek operation : "+qq.peek())
console.log("Enqueue Operation "+qq.enqueue(100));
console.log("Enqueue Operation "+qq.enqueue(200));
console.log("Enqueue Operation "+qq.enqueue(300));
console.log("Enqueue Operation "+qq.enqueue(400));
console.log("Queue size "+qq.size())
console.log("Queue is empty "+qq.isEmpty())
console.log("Dequeue Operation "+qq.dequeue())
console.log("Queue size "+qq.size())
console.log("Peek operation : "+qq.peek())
console.log("Queue size "+qq.size())
console.log(qq)