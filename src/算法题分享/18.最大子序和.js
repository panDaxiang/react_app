// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [0]
// 输出：0

const arrSum = arr => arr.reduce((sum, item) => sum + Number(item) || 0, 0);

/** 暴力解 */
const getMaxSum = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr[0]
  let maxSum;
  let left = 0, right = 1;
  while (left <= right && right <= len) {
    // console.log(left, right);
    let sum = arrSum(arr.slice(left, right));
    if (sum > maxSum || maxSum === undefined) {
      maxSum = sum;
    }

    if (right >= len) {
      left++;
      right = left
    } else {
      right++
    }
  }
  return maxSum
}

// console.log(getMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(getMaxSum([1]));
// console.log(getMaxSum([0]));
// console.log(getMaxSum([0, 1, 2]));

/** 动态规划解 */
const getMaxSum2 = (arr) => {
  let maxSum = arr[0];

  let res
  for(let item of arr){
    if(res < 0){
      res = item
    }else{
      res = (res || 0) + item
    }

    maxSum = Math.max(res, maxSum)
  }

  return maxSum
}

// console.log(getMaxSum2([1]));
// console.log(getMaxSum2([0]));
console.log(getMaxSum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(getMaxSum2([0, 1, 2]));