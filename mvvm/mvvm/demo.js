function observe (data) {
  if (!data || typeof data !== 'object') {
    return
  }

  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive (data, key, val) {
  let dep = new Dep()

  observe(val)

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get () {
      console.log(`get---:---${val}`)
      return val
    },
    set (newVal) {
      if (newVal === val) {
        return
      }
      console.log(`set---:---${newVal}`)
      val = newVal
      dep.notify()
    }   
  })
}

function Dep () {
  this.subs = []
}

Dep.prototype = {
  constructor: Dep,
  addSub (sub) {
    this.subs.push(sub)
  },
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

var data = {
  name: 'qianlongo',
  obj: {
    sex: 'boy'
  }
}

observe(data)

data.name = 'haha'
data.obj.sex = 'girl'

console.log(data.name)
console.log(data.obj.sex)