let a = 1


setTimeout(() => {
  console.log(a)
}, 2000)

module.exports = {
  a
}

console.log(module.exports)