/** 
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
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
 *      1
 *   2    5 
 * 3  4  6  7 
 */

/** 递归解法 */
function pathSum(node, targetSum){
  let isHasPathSum = false
  function dfs(node, sum){
    node.targetSum = node.value + sum;
    if(!node.left && !node.right && node.targetSum === targetSum){
      isHasPathSum = true;
      return
    }
    if(node.left) dfs(node.left, node.targetSum)
    if(node.right) dfs(node.right, node.targetSum)
    console.log(node.targetSum)
  }

  dfs(node, 0)

  return isHasPathSum
}


// console.log(pathSum(root, 8))

/** 利用栈解法 */
function pathSum(node, targetSum){
  const stack = [{ ...node, sum: node.value }]
  while(stack.length){
    const lastNode = stack.pop()
    if(lastNode.right){
      stack.push({ ...lastNode.right, sum: lastNode.value + lastNode.right.value })
    }
    if(lastNode.left){
      stack.push({ ...lastNode.left, sum: lastNode.value + lastNode.left.value })
    }

    if(!lastNode.left && !lastNode.right && lastNode.sum === targetSum){
      return true
    }
  }

  return false
}

console.log(pathSum(root, 6))