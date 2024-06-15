function lettersCombinations(digits) {
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

  if (digits.length <= 1) return map[digits] ? map[digits].split('') : []

  let result = ['']

  for (let digit of digits) {
    let temp = []
    for (let prev of result) {
      for (let cur of map[digit]) {
        temp.push(prev + cur)
      }
    }

    result = temp
  }

  return result
}

console.log(lettersCombinations('23'))
console.log(lettersCombinations('2'));
console.log(lettersCombinations(''));

