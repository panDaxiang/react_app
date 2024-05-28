function twoSun(arr, target){
  const map = new Map();

  for(let i = 0; i < arr.length; i++){
    const item = arr[i];
    if(map.has(item)){
      return [map.get(item), i]
    }else{
      map.set(target - item, i)
    }
  }

  return []
}

console.log(twoSun([1,2,3,4], 8))