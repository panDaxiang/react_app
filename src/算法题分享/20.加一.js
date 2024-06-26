// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 示例 1：
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 示例 2：
// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。

// 示例 3：
// 输入：digits = [0]
// 输出：[1]

function addOne(arr){
  let rest = 1
  for(let i = arr.length - 1; i >= 0; i--){
    const curSum = rest + arr[i];
    if(curSum > 9){
      arr[i] = curSum - 10
      rest = 1
    }else{
      arr[i] = curSum
      rest = 0
    }
  }

  return rest !== 0 ? [rest, ...arr] : arr
}

console.log(addOne([1,2,3]));
console.log(addOne([4,3,2,1]));
console.log(addOne([0]));
