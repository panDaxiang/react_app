function getBinaryTreeMaxDepth(node){
  if(!node) return 0
  if(!node.left && !node.right){
    return 1
  }
  return Math.max(getBinaryTreeMaxDepth(node.left), getBinaryTreeMaxDepth(node.right)) + 1
}

const node = {
  value: '1',
  left: {
    value: '2-1',
    left: {
      value: '3-1'
    },
    right: {
      value: '3-2'
    }
  },
  right: {
    value: '2-2',
    left: {
      value: '3-3'
    }
  }
}

// console.log(getBinaryTreeMaxDepth(node));

function getBinaryTreeMaxDepthWithStack(node){
  let stack = [node];
  let depth = 0;

  while(stack.length){
    let levelStack = [...stack];
    stack = []
    depth++
    while(levelStack.length){
      const node = levelStack.shift()
      if(node.left) stack.push(node.left)
      if(node.right) stack.push(node.right)
    }
  }

  return depth
}

console.log(getBinaryTreeMaxDepthWithStack(node));
