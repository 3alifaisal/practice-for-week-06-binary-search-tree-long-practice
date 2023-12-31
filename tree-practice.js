const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if(rootNode.left === null) return rootNode.val;
  
  return findMinBST(rootNode.left)
}




function findMaxBST (rootNode) {
  if (rootNode.right === null) return rootNode.val;

  return findMaxBST(rootNode.right)
}




function findMinBT(rootNode) {
  if (rootNode === null) {
    // Handle the case when the tree is empty
    return null;
  }

  let stack = [];
  stack.push(rootNode);
  let min = rootNode.val;

  while (stack.length > 0) {
    let currentNode = stack.pop();

    if (min > currentNode.val) {
      min = currentNode.val;
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
  }

  return min;
}


function findMaxBT (rootNode) {
  if (rootNode === null) {
    // Handle the case when the tree is empty
    return null;
  }

  let stack = [];
  stack.push(rootNode);
  let max = rootNode.val;


  while (stack.length > 0) {
    let currentNode = stack.pop();

    if (max < currentNode.val) {
      max = currentNode.val;
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    
  }
  return max;
 
}

function getHeight(rootNode) {
  
  if (rootNode === null) {
    return -1;
  }
  if(rootNode.left === null && rootNode.right ===null){
    return 0;
  }
  
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  
  return 1 + Math.max(leftHeight, rightHeight) ;

}


function balancedTree (rootNode) {

  if (rootNode=== null) {
    return true;
  }
  if (rootNode.left === null && rootNode.right === null) {
    return true;
  }
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }

  return balancedTree(rootNode.left) && balancedTree(rootNode.right)
  
}

function countNodes (rootNode) {
  if (rootNode === null) {
    // Handle the case when the tree is empty
    return null;
  }

  let stack = [];
  stack.push(rootNode);
  let count = 0;


  while (stack.length > 0) {
    let currentNode = stack.pop();

    count++;

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    

  }
  return count;
}

  function getParentNode(rootNode, target) {
    if (rootNode === null) {
      return undefined;
    }

    if (rootNode.val === target) {
      return null;
    }

    if (rootNode.left !== null && rootNode.left.val === target) {
      return rootNode;
    }

    if (rootNode.right !== null && rootNode.right.val === target) {
      return rootNode;
    }

    const leftParent = getParentNode(rootNode.left, target);
    if (leftParent !== undefined) {
      return leftParent;
    }

    const rightParent = getParentNode(rootNode.right, target);
    if (rightParent !== undefined) {
      return rightParent;
    }

    return undefined
    
  }

function inOrderPredecessor(rootNode, target) {
  const stack = [];
  let current = rootNode;
  let predecessor = null;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    // Check if the current node's value is equal to the target
    if (current.val === target) {
      // Return the last visited node as the in-order predecessor
      return predecessor;
    }

    // Update the predecessor as we visit nodes
    predecessor = current.val;

    current = current.right;
  }

  // If the target is not found, return null
  return null;
}



function placeOfNode(currentNode, target){
  

  while (currentNode !== null) {
    if (currentNode.val === target) return currentNode;

    if (currentNode.val > target) {
      currentNode = currentNode.left
      continue;
    }

    if (currentNode.val < target) {
      currentNode = currentNode.right
    }
  }
  return undefined;
}





function deleteNodeBST(rootNode, target) {
  let  nodeToBeDeleted = placeOfNode(rootNode, target);

  const itsParent = getParentNode(rootNode, target);

  if(nodeToBeDeleted === undefined) return undefined;
  
  if(nodeToBeDeleted.left === null && nodeToBeDeleted.right === null){
    

    if(itsParent.left === nodeToBeDeleted){
      itsParent.left = null
      return
    }
    if(itsParent.right === nodeToBeDeleted){
      itsParent.right = null
      return
    }
  }
  if(nodeToBeDeleted.left === null && nodeToBeDeleted.right !== null){
    const iTsChild = nodeToBeDeleted.right;
   


    if (itsParent.left === nodeToBeDeleted) {
      itsParent.left = iTsChild
      
      return
    }
    if (itsParent.right === nodeToBeDeleted) {
     
      itsParent.right = iTsChild
      
      return
    }
  }
  if(nodeToBeDeleted.left !== null && nodeToBeDeleted.right === null){
    const iTsChild = nodeToBeDeleted.left;
   


    if (itsParent.left === nodeToBeDeleted) {
      itsParent.left = iTsChild
      
      return
    }
    if (itsParent.right === nodeToBeDeleted) {
      itsParent.right = iTsChild;
      
      return
    }
  }

  if(nodeToBeDeleted.left !== null && nodeToBeDeleted.right !== null){

    const minInRight = findMinBST(nodeToBeDeleted.right);

    deleteNodeBST(nodeToBeDeleted, minInRight);

    nodeToBeDeleted.val = minInRight;
  }
}
bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);
deleteNodeBST(bstRoot, 5);
deleteNodeBST(bstRoot, 6);
getParentNode(bstRoot, 7);

//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}