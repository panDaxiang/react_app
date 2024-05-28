function isSymmetry(root){
  function isSame(leftNode, rightNode){
    if(!leftNode && !rightNode) return true
    if(!leftNode || !rightNode) return false
    return leftNode.value === rightNode.value && isSame(leftNode.left, rightNode.right) && isSame(leftNode.right, rightNode.left)
  };

  if(!root) return false;
  return isSame(root.left, root.right)
}

const node1 = {
  value: '1',
  left: {
    value: 2,
    left: {
      value: 3
    }
  },
  right: {
    value: 2,
    left: {
      value: 3
    }
  }
}

console.log(isSymmetry(node1))