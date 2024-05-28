/** 
 *      1
 *   2    5 
 * 3  4  6  7 
 */

const root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}

/** 
 * 前序遍历
 * 先遍历父节点，再遍历左子节点，最后右子节点
 */

function preorderTraversalWithRecursion(node){
  console.log(node.value);
  if(node.left){
    preorderTraversalWithRecursion(node.left)
  }
  if(node.right){
    preorderTraversalWithRecursion(node.right)
  }
}

// console.log('前序递归遍历：', preorderTraversalWithRecursion(root));

function preorderTraversalWithStack(node){
  const stack = [node]
  while(stack.length){
    const lastNode = stack.pop();

    console.log(lastNode.value);

    if(lastNode.right) stack.push(lastNode.right);
    if(lastNode.left) stack.push(lastNode.left);
  }
}

// console.log('前序迭代遍历：', preorderTraversalWithStack(root));


/** 
 * 中序遍历
 * 先遍历左子节点，再遍历父节点，最后右子节点
 */
function inorderTraversalWithRecursion(node){
  if(node.left){
    inorderTraversalWithRecursion(node.left)
  }
  console.log(node.value);
  if(node.right){
    inorderTraversalWithRecursion(node.right)
  }
}

// console.log('中序递归遍历：', inorderTraversalWithRecursion(root));

function inorderTraversalWithStack(node){
  const stack = [];
  while(node || stack.length){
    while(node){
      stack.push(node)
      node = node.left
    }
    node = stack.pop();
    console.log(node.value)
    node = node.right
  }
}

// console.log('中序迭代遍历：', inorderTraversalWithStack(root));

/** 
 * 后序遍历
 * 先遍历左子节点，再遍历右子节点，最后父节点
 */

function postorderTraversalWithStack(node){
  const stack = [], res = []

  while(node || stack.length){
    while(node){
      stack.push(node)
      res.unshift(node.value)
      node = node.right
    }

    node = stack.pop()
    node = node.left
  }

  console.log(res);
}

console.log('后序迭代遍历：', postorderTraversalWithStack(root));

