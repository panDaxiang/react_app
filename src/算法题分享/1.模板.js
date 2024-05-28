/** 
 * 实现一个字符串模板
 * 我是名字是{{name}},我的工作是{{work}}
 * 将数据{name:'小王', work:'前端开发工程师'}，替换到字符串模板中
 */

function render(str, data){
  let index = 0
  return str.replace(/\{\{(\w+)\}\}/g, (...arg) => {
    console.log(arg, index)
    index++
    // return data[$1]
  })
}

const ref = render('我是名字是{{name}},我的工作是{{work}}', {name:'小王', work:'前端开发工程师'})
console.log(ref);

