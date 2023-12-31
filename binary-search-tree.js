// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }


    insert(val, currentNode = this.root){
        if(currentNode === null) {
            this.root = new TreeNode(val)
            return;
        }


        if(currentNode.val > val && currentNode.left === null) {

             currentNode.left = new TreeNode(val);
             return;
        }

        if(currentNode.val > val && currentNode.left !== null){
           
            return this.insert(val,currentNode.left)
             
        }

        if(currentNode.val < val && currentNode.right === null){

             currentNode.right = new TreeNode(val);
             return;
        }

        if(currentNode.val < val && currentNode.right !== null){

           return this.insert(val, currentNode.right)
            

        }
        if( currentNode.val === val){

            throw new Error("Value already present in the binary search tree")
        }
}

    search(val){
        let currentNode = this.root

        while(currentNode !== null){
            if(currentNode.val === val) return true;

            if(currentNode.val > val){
                currentNode = currentNode.left 
                continue;
            }

            if(currentNode.val < val){
                currentNode = currentNode.right
            }
        }
        return false;
    }


    preOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return 0;
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right)


    }



    inOrderTraversal(currentNode = this.root) {
        if (currentNode === null) return 0;

        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
        // Your code here

    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return 0;

        const left = this.postOrderTraversal(currentNode.left)

        const right = this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
        const queue = []
        queue.push(this.root);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode.val);
            if (currentNode.left !== null) queue.push(currentNode.left)
            if (currentNode.right !== null) queue.push(currentNode.right)
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [];
        stack.push(this.root);
        while (stack.length > 0) {
            const currentNode = stack.pop();
            console.log(currentNode.val);
            if (currentNode.left !== null) stack.push(currentNode.left)
            if (currentNode.right !== null) stack.push(currentNode.right)
        }
    }

}


module.exports = { BinarySearchTree, TreeNode };