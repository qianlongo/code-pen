const myPromise = require('./promise')

new myPromise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
}).then((value) => {
  console.log(value)
}).then((value) => {
  console.log(value, '---')
})