/** 
 * 将数组的每项进行组合，并不能重复
 * [1,2,3] => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 */

function arrCombination(arr){  
  return arr.reduce((res, item) => {
    // 第一个和item组合成一个新增的数组
    const newAddArray = res.map(r => [...r, item])
    return res.concat(newAddArray)
  }, [[]])
}

console.log(arrCombination([1,2,3]))