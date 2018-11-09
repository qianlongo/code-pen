var double = (n) => n * 2
var pow = (n) => n * n
const pipe = (val) => {
  let funcStack = []
  let proxy = new Proxy({}, {
    get (target, fnName) {
      if (fnName === 'get') {
        return funcStack.reduce((val, fn) => {
          console.log(fn)
          return fn(val)
        }, val)
      }

      funcStack.push(window[fnName])

      return proxy
    }
  })

  return proxy
}

console.log(pipe(3).double.pow.get)