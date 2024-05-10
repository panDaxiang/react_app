function Range(from, to){
  this.from = from
  this.to = to
}


// Range.prototype[Symbol.iterator] = function(){
//   return {
//     from: this.from,
//     to: this.to,
//     next(){
//       if(this.to > this.from){
//         return { value: this.from++, done: false}
//       }
//       return { done: true }
//     }
//   }
// }

Range.prototype[Symbol.iterator] = function*(){
  for(let i = this.from; i < this.to; i++){
    yield i
  }
}

const arr = new Range(5, 11);

for(let i of arr){
  console.log(i)
}

console.log(...Array.from(arr))

async function add(){
  const res = await Promise.resolve(111);
  console.log(res)
}

add()
