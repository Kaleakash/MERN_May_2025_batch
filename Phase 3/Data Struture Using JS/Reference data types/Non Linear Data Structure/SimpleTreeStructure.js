class TreeNode {
    constructor(value){
        this.value = value; // root, child1, child2  till child5 
        this.children = [];         // array value 
    }
    addChild(childNode){
        this.children.push(childNode);
    }
}
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue)
    }
}

let tree = new Tree("root");
//console.log(tree.root)
let child1 = new Tree("Child1");
let child2 = new Tree("Child2");
let child3 = new Tree("Child3");

let grandChild1 = new Tree("Grand Child1");
let grandChild2 = new Tree("Grand Child2");

let grandGrandChild1 = new Tree("Grand Grand Child1");
let grandGrandChild2 = new Tree("Grand Grand Child2");



//console.log(child1.root)
tree.root.addChild(child1)
tree.root.addChild(child2)
tree.root.addChild(child3)

grandChild1.root.addChild(grandGrandChild1)
grandChild1.root.addChild(grandGrandChild1)

child1.root.addChild(grandChild1)

console.log(tree.root)
console.log(child1.root)
console.log(child2.root)
console.log(child3.root)
console.log(grandChild1.root)