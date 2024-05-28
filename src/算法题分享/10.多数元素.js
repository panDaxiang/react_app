/** 
 * 
 * 定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
   你可以假设数组是非空的，并且给定的数组总是存在多数元素。
    输入：nums = [3,2,3]
    输出：3
​
    输入：nums = [2,2,1,1,1,2,2]
    输出：2
 */

function getMajority(arr) {
  const length = arr.length;

  if (length === 0) return undefined
  if (length === 1) return arr[0]
  const map = new Map()

  for (let item of arr) {
    const curNum = map.get(item)
    if (curNum) {
      map.set(item, curNum + 1)
    } else {
      map.set(item, 1)
    }
    if (map.get(item) > length / 2) {
      return item
    }
  }
}

console.log(getMajority([3,2,3]));
console.log(getMajority([2,2,1,1,1,2,2]));
