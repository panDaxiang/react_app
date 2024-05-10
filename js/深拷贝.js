function cloneDeep(obj, map = new WeakMap()){
  if(typeof obj !== 'object' || obj === null) return obj

  if(map.has(obj)) return map.get(obj)

  map.set(obj, obj)

  let result

  if(obj instanceof Map){
    result = new Map()
    obj.forEach((value, key) => {
      result.set(cloneDeep(key, map), cloneDeep(value, map))
    }) 
  }

  else if(obj instanceof Set){
    result = new Set()
    obj.forEach(item => {
      result.add(cloneDeep(item, map))
    })
  }

  else if(obj instanceof Array){
    result = []
    obj.forEach(item => {
      result.push(cloneDeep(item, map))
    })
  }

  else {
    result = {}
    for(let key in obj){
      result[key] = cloneDeep(obj[key], map)
    }
  }

  return result
}

const obj = {
  map: new Map(),
  set: new Set(),
  a: [1, 33],
  b: {
    a: 1
  }
}

obj.b = obj

console.log(cloneDeep(obj));