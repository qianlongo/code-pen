let fn = (arr) => {
  let reObj = {}
  let result = []

  arr.forEach((v, i) => {
    if (!reObj[v]) {
      reObj[v] = {
        num: 1
      }
    } else {
      reObj[v]['num'] += 1
    }
  })

  for (let key in reObj) {
    if (reObj[key].num == 1) {
      result.push(parseInt(key))
    }
  }

  return result
}

let a = fn([1, 1, 10, 10, 3])

console.log(a)