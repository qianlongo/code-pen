let person = {
  name: 'qianlongo'
}
let proxy = new Proxy(person, {
  get (target, key) {
    if (key in target) {
      return target[key]
    } else {
      throw new ReferenceError("Property \"" + key + "\" does not exist.")
    }
  }
})

console.log(proxy.name)

proxy.sex
