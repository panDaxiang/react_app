function threeSum(arr) {
  arr.sort((a, b) => a - b);
  if (arr.length < 3) return []
  let result = []
  for (let i = 0; i < arr.length - 2; i++) {
    
    let cur = arr[i];
    if (cur > 0) break;
    if (i - 1 > 0 && cur === arr[i - 1]) continue;
    let left = i + 1, right = arr.length - 1;

    while (left < right) {
      let l = arr[left], r = arr[right];
      const sum = cur + l + r;
      if (sum === 0) {
        result.push([cur, l, r]);
        while (left < right && l === arr[left]) {
          left++
        }
        while (left < right && r === arr[right]) {
          right--
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

const num1 = [-1, -1, -1, -1, 0, 2, 3, 2, 1, 2, -1, -4]
const num2 = []
const num3 = [0]

console.log(threeSum(num1))
console.log(threeSum(num2))
console.log(threeSum(num3))