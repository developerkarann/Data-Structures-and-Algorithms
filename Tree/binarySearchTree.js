
class Node {
    constructor(val) {
        this.value = val;
        this.left = nul;
        this.right = null;
    }
}

class BinarySeachTree {
    constructor() {
        this.root = null;
    }

    isEmptyTree() {
        return this.root === null
    } 
}

let bst = new BinarySeachTree();

console.log(bst.isEmptyTree())
