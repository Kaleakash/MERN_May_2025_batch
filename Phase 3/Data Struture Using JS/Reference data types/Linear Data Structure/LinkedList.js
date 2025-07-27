class Node {            // if we create Node class object we need pass the data of any type 
    constructor(data) {     // for that object data is value and next initially is null. 
        this.data = data;
        this.next = null;
    }
}
class LinkedList {  // linked list class object created head property with value as null. 
    constructor(){  
        this.head=null;         // head is null 
    }
    append(data){
        let newNode = new Node(data); 
        if(this.head==null){       
            this.head = newNode;        
            console.log("if work")
            return;
        }
        let current = this.head;   
        while(current.next){
            console.log("while work")
            current=current.next;
            console.log(current)
        }
        current.next=newNode;
        console.log(current)
        console.log(current.next)
    }
    prepend(data){
        let newNode = new Node(data);
        newNode.next=this.head;
        this.head = newNode;
    }
    printNodeList() {
        let current = this.head;
        let output = ""
        while(current){     // it need to execute till null value 
                output = output+ current.data+"-->"
                current= current.next;      // move to next node 
        }
        console.log(output+" null")
    }
}
let ll = new LinkedList();  // head is null 
console.log(ll)
ll.append("John")
console.log("---------------")
ll.append("Raj")
console.log("---------------")
ll.append("Leena")
console.log("---------------")
ll.append("Vikash")
ll.prepend("Steven")
ll.prepend("Lokesh")
console.log("After added both from both side")
console.log(ll)             // lokesh 
console.log("------------------------------")
console.log("All value from Linked List")
ll.printNodeList();