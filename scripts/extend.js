let isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
let extend = function () {
  let innerExtend = (target, source) => {
    for (let key in source) {
      if (isObject(source[key]) || Array.isArray(source[key])) {
        if (isObject(source[key]) && !isObject(target[key])) {
          target[key] = {}
        }

        if (Array.isArray(source[key]) && !Array.isArray(target[key])) {
          target[key] = []
        }

        extend(target[key], source[key])
      } else if (source[key] != void 0) {
        target[key] = source[key]
      }
    }
  }

  let args = [].slice.call(arguments)
  let target = args.shift()
  
  args.forEach((v, i) => {
    innerExtend(target, v)
  })

  return target
}

let target = {obj: {name: 'haha'}}
let source = {
  name: 'qianlogo',
  sex: 'boy',
  obj: {
    name: 'qianlogo',
    sex: 'boy',
    obj: {
      name: 'qianlogo',
      sex: 'boy'
    },
    arr: [1, 2, 3 ,4]
  }
}

let result = extend({}, target, source)

console.log(result.)