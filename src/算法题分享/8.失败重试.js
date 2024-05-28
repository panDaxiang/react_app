
function retry(fn, limit) {
  let count = 0;
  return (...args) => {
    return new Promise((resolve, reject) => {
      let retryFn = () => {
        fn(...args).then((res) => {
          resolve(res)
          count = 0
        }, (error) => {
          count++
          if (count < limit) {
            retryFn()
          } else {
            reject(error)
            count = 0
          }
        })
      }

      retryFn()
    })
  }
}

// 假定这个是请求
const request = (id) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      console.log('random', random)
      if(random > 0.5){
        resolve(random)
      }else{
        reject(random)
      }
    })
  })
 };

// 通过调用retry得到真正的执行方法，这里的3是retry次数
const fn = retry(request, 3);
// 传入请求参数，假设失败了会自动尝试3次
fn().then((res) => {
  console.log('success', res)
 }).catch(err => {
  console.log('fail', err)
 });