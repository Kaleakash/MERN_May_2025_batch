class Graph {
    constructor() {
        this.listOfVertices = {}        // object type ie literal style {} this object can hold array of vertex
    }
    addVertex(vertex){
        if(this.listOfVertices[vertex]==undefined){
            this.listOfVertices[vertex]=[]; // if vertex not present then create for that vertex array variable
            console.log("Vertex or node with name "+vertex+" created "+this.listOfVertices[vertex])
        }else {
            console.log(vertex+", vertex or node present")
        }
    }
    addEdge(vertex1,vertex2){
        if(this.listOfVertices[vertex1]==undefined || this.listOfVertices[vertex2]==undefined){
        console.log("May be any of the vertex not present or not created")
        }else {
            let result = this.listOfVertices[vertex1].find(v=>v==vertex2)
            if(result==undefined){
                this.listOfVertices[vertex1].push(vertex2);
                console.log(vertex1+" connected to "+vertex2)
            }else {
                console.log(vertex1+" already connected to "+vertex2)
            }
            
        }
    }
    printGraph() {
        for(let vertex in this.listOfVertices){
            if(this.listOfVertices[vertex].length==0){
                console.log(vertex+" not connected to any other vertex")
            }else {
                console.log(vertex+" --->"+this.listOfVertices[vertex].join(" "))
            }
            
        }
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("D");
console.log("------------------------")
graph.addEdge("A","E")
graph.addEdge("A","B")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("B","C")
graph.addEdge("B","D")
graph.addEdge("B","D")
graph.addEdge("B","A")
console.log("--------------Print Graph-----------")
graph.printGraph();