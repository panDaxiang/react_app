/** 
 * 对数组去重
 * [1, -1, 1] -> [1, -1]
 * [{a: 1, b: 1}, { b: 1, a:1}, { a: 1 }] -> [{a: 1, b:1}, {a: 1}]
 * [[1], [2], [1], [{ a: 1 }], [{a: 1}], [{b:1}]] -> [[1], [2], [{a:1}], [{b:1}]]
 */

const isObj = obj => typeof obj === 'object' && obj !== null 
const isArray = arr => Array.isArray(arr)

function isEqual(a, b){
  if(isArray(a) && isArray(b)){
    const aLength = a.length;
    const bLength = b.length;
    if(aLength !== bLength) return false;
    for(let i = 0; i < aLength; i++){
      if(!isEqual(a[i], b[i])){
        return false
      }
    }

    return true
  }

  if(isObj(a) && isObj(b)){
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if(aKeys.length !== bKeys.length) return false;

    for(let i = 0; i < aKeys.length; i++){
      const key = aKeys[i];
      if(!isEqual(a[key], b[key])) return false
    }

    return true
  }

  return a === b
}

function filterSame(arr){
  return arr.reduce((res, item) => {
    if(!res.find(r => isEqual(r, item))){
      res.push(item)
    }
    return res
  }, [])
}

// console.log(filterSame([1, -1, 1]))
// console.log(filterSame([{a: 1, b: 1}, { b: 1, a:1}]));
// console.log(filterSame([[1], [2], [1], [{ a: 1 }], [{a: 1}]]));

// function unique(args){
//   let obj  = {}
//   return args.filter((item) => {
//     console.log(typeof item + item);
//     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
//   })
// }

// unique([1, -1, 1])
// console.log(unique([{a: 1, b: 1}, { b: 1, a:1}, { a: 1}]));
// unique([[1], [2], [1], [{ a: 1 }], [{a: 1}]]);