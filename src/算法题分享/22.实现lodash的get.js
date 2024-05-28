const get = (obj, path, defaultValue) => {
  const isObj = typeof obj === 'object' && obj !== null;

  if(isObj){
    const isArray = Array.isArray(path)

    if(!isArray){
      path = path.replace(/\[(\d+)\]/g, ($, $1) => {
        return '.' + $1;
      }).split('.')
    }

    let result = obj;

    for(let i = 0; i < path.length; i++){
      const temp  = result[path[i]]
      if(temp === undefined) return defaultValue
      result = temp
    }

    return result
  }

  return defaultValue
}



var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(get(object, 'a[0].b.c'));
console.log(get(object, ['a', '0', 'b', 'c']));
console.log(get(object, 'a.b.c', 'default'));