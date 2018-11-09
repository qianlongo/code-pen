let obj = new Proxy({}, {
  get (target, key) {
    console.log(`get key: ${key}`)

    return target[key]
  },
  set (target, key, val) {
    console.log(`set key: ${key}`)

    target[key] = val
  }
})

obj.name

obj.name = 'qianlongo'

