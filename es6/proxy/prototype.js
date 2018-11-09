const proxy = new Proxy({}, {
  get (target, key) {
    return 35
  }
})

let obj = Object.create(proxy)

console.log(obj.name, obj.sex)

console.log(obj)