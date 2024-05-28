function sqrt(x){
  let s = -1;

  let l = 0, r = x;

  while(l <= r){
    const mid = (r + l) >> 1
    const res = mid * mid

    if(res > x){
      r = mid - 1
    }else if(res < x){
      l = mid + 1
      s = mid
    }else{
      s = mid
      return s
    }
  }

  return s
}

console.log(sqrt(9));
console.log(sqrt(8));
console.log(sqrt(7));