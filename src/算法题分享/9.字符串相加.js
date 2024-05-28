function strSum(a, b) {
  const aLength = a.length, bLength = b.length
  const length = Math.max(aLength, bLength);
  let sum = '', res = 0

  for (let i = 0; i < length; i++) {
    const curSum = (Number(a[aLength - i - 1]) || 0) + (Number(b[bLength - i - 1]) || 0) + res;

    res = parseInt(curSum / 10);

    sum = curSum % 10 + sum
  }

  return res === 0 ? sum : res + sum
}

console.log(strSum('100', '1100'))
console.log(strSum('0', '0'))