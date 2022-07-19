

class MyPlugin{
  apply(compiler){
    compiler.hooks.emit.tap('MyPlugin', (compilation) => {
      // console.log(compilation.assets)
    })
  }
}

module.exports = MyPlugin