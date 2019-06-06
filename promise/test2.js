const p = new Promise((resolve, reject) => {
  reject(111)
})


p.catch((e) => {
  console.log(e)
  return e
})

p.then((res) => {
  console.log(res)
})