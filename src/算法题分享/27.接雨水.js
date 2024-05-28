function getMaxArea(arr) {
  let left = 0, right = arr.length - 1;
  let result = 0

  while(left < right){
    let leftHeight = arr[left], rightHeight = arr[right]

    if(leftHeight < rightHeight){
      result = Math.max(result, (right - left) * leftHeight)
      left++
    }else{
      result = Math.max(result, (right - left) * rightHeight)
      right--
    }
  }

  return result
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(getMaxArea(arr));