// 给你一个字符串 s，找到 s 中最长的回文子串。

// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"

function isReverseString(str) {
  const length = str.length;
  let left = 0, right = length - 1
  while (left <= right) {
    if (str[left] === str[right]) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
}

function getMaxReverseString(str) {
  let maxStr = ''

  for (let i = 0; i < str.length; i++) {
    getString(i, i)
    getString(i, i + 1)
  }

  function getString(m, n) {
    while (str[m] === str[n] && m >= 0 && n < str.length) {
      m--;
      n++
    }

    if (n - m - 1 >= maxStr.length) {
      maxStr = str.slice(m + 1, n)
    }
  }

  return maxStr
}

console.log(getMaxReverseString('babad'));
console.log(getMaxReverseString('cbbd'));