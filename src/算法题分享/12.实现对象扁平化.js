// 实现一个方法，扁平化如下数据
// 原数据
const obj = {
  a: 1,
  b: {
    f: '2',
    g: '3'
  },
  c: {
    d: [1, 2, {
      e: true
    }]
  }
}

// 转化为
const obj2 = {
  a: 1,
  'b.f': '2',
  'b.g': '3',
  'c.d[0]': 1,
  'c.d[1]': 2,
  'c.d[2].e': true
}

const isArray = arr => Array.isArray(arr)
const isObj = obj => typeof obj === 'object' && obj !== null

/** 
 * 需要判断属性值是什么对应数据类型
 * 如果是obj或者是数组，需要递归处理，记录路径
 * 如果是普通数据，直接将路径合并
 */
function flatObj(obj){
  const newObj = {}

  function handleData(data, path){
    if(isArray(data)){
      data.forEach((item, index) => {
        handleData(item, path + `[${index}]`)
      })
      return
    }

    if(isObj(data)){
      Object.keys(data).forEach(key => {
        const value = data[key];
        const pathKey = path ? path + '.' + key : key
        handleData(value, pathKey)
      })
      return
    }
    newObj[path] = data
  }

  handleData(obj, '')

  return newObj
}

console.log(flatObj(obj));