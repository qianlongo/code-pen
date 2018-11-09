// 1 双重循环，内部比较，有相同的，给外部循环加1
((pause) => {
  if (pause) return

  Array.prototype.unique1 = function () {
    let len = this.length
    let results = []
    let i, j

    for (i = 0; i < len; i++) {
      for (j = i + 1; j < len; j++) {
        if (this[i] === this[j]) {
          j = ++i
        }
      }
      results.push(this[i])
    }

    return results
  }

  let testArr = [1, 2, 1, 2, 3, undefined, {}, {}, NaN, '1']
  console.log(testArr.unique1())
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.unique2 = function () {
    let len = this.length

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (this[j] === this[i]) {
          this.splice(j, 1)
          len--
          j--
        }
      }
    }

    return this
  }

  let testArr = [1, 2, 1, 2, 3, undefined, {}, {}, NaN, '1', NaN]
  console.log(testArr.unique2())
})(1)

// 有bug
;((pause) => {
  if (pause) return

  Array.prototype.unique3 = function () {
    let len = this.length
    let results = []
    let obj = {}

    for (let i = 0; i < len; i++) {
      let val = this[i]
      if (!obj[val]) {
        obj[val] = 1
        results.push(val)
      }
    }

    return results
  }

  let testArr = [1, 2, 1, 2, 3, undefined, {}, {}, NaN, '1', NaN]
  console.log(testArr.unique3())
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.unique4 = function () {
    let len = this.length
    let results = []

    for (let i = 0; i < len; i++) {
      if (results.indexOf(this[i]) === -1) {
        results.push(this[i])
      }
    }

    return results
  }

  let testArr = [1, 2, 1, 2, 3, undefined, {}, {}, NaN, '1', NaN]
  console.log(testArr.unique4())
})()