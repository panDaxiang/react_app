// 输入：nums = [-10,-3,0,5,9]
// 输出：[0,-3,9,-10,null,5]

function createNode(value){
  return {
    value,
  }
}

function toBST(nums, left, right){
  if(left > right) return null;

  const mid = left + right >> 1;

  const node = createNode(nums[mid]);

  node.left = toBST(nums, left, mid - 1)
  node.right = toBST(nums, mid + 1, right)

  return node
}

console.log(toBST([-10,-3,0,5,9], 0, 4));