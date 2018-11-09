// 铺平数组
let flatten = (array) => {
  let idx = 0
  let result = []

  array.forEach((v, i) => {
    if (Array.isArray(v)) {
      let value = flatten(v)
      let len = value.length
      result.length += len
      let j = 0
      while (j < len) {
        result[idx++] = value[j++]
      }
    } else {
      result[idx++] = v
    }
  })

  return result
}

let flatten2 = (array) => {
  return array.reduce((result, v) => {
    return result.concat(Array.isArray(v) ? flatten2(v) : v)
  }, [])
}

let flatten3 = (arr) => {
  return arr.reduce((result, v) => {
    return result.concat(Array.isArray(v) ? flatten3(v) : v)
  }, [])
}

let testArr = [1, 2,[11, 34], [45, 76], [3, 4, [5, 6, [7, []]]]]

console.log(flatten(testArr))
console.log(flatten2(testArr))
console.log(flatten3(testArr))