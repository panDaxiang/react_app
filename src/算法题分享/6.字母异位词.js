/** 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词
 */

function isAnagram(s, t){
  const sLength = s.length
  const tLength = t.length

  if(sLength !== tLength) return false

  let obj = {}

  for(let i = 0; i < sLength; i++){
    const sStr = s[i], tStr = t[i];
    if(obj[sStr]){
      obj[sStr]++
    }else{
      obj[sStr] = 1
    }

    if(obj[tStr]){
      obj[tStr]--
    }else{
      obj[tStr] = -1
    }
  }
  return Object.values(obj).every(v => v === 0)
}

console.log(isAnagram('abc', 'vab'))
console.log(isAnagram('abc', 'cab'))