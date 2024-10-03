class Graph{
    constructor(){
        this.data = {}
    }
    addVertex(vertex){
        if(!this.data[vertex]){
            this.data[vertex] = [] 
        }
    }
}


const graph1 = new Graph();
graph1.addVertex('A')
graph1.addVertex('B')
graph1.addVertex('C')
graph1.addVertex('D')

console.log(graph1.data)
