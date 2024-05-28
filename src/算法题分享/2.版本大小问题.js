/** 
 * 获取的两个版本中最大的一个版本
 * 1.20.1 2.1.1
 */

function getPadVersion(version){
  return version.replace(/\d+/g, (match) => {
    return match.padStart(4, 0)
  }).replace(/\./g, '')
}

function getMaxVersion(arr){
  let maxVersion = 0;
  let maxIndex = 0

  for(let i = 0; i < arr.length; i++){
    const curPadVersion = getPadVersion(arr[i])
    if(curPadVersion > maxVersion){
      maxVersion = curPadVersion
      maxIndex = i
    }
  }

  return arr[maxIndex]
}

console.log(getMaxVersion(['1.20.1', '2.1.1', '1.1.10', '3.0.0']))