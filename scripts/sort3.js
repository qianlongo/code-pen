Array.prototype.sort3 = function () {
  let len = this.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}
// let testArr = [1, 2, 3, 3, 12, -1, 0, 456, 32, 1, -234, 120]
// testArr.sort3()
// console.log(testArr)

Array.prototype.sort4 = function () {
  let len = this.length
  let minIndex
  let temp

  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      temp = this[i]
      this[i] = this[minIndex]
      this[minIndex] = temp
    }
  }
}

// let testArr = [1, 2, 3, 3, 12, -1, 0, 456, 32, 1, -234, 120]
//   testArr.sort4()
//   console.log(testArr)

let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  let middleVal = arr.splice(Math.floor(arr.length / 2), 1)[0]
  let leftArr = []
  let rightArr = []

  for (let i = 0, len = arr.length; i < len; i++) {
    let tempVal = arr[i]
    tempVal < middleVal ? leftArr.push(tempVal) : rightArr.push(tempVal)
  }

  return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
}

let testArr = [3, 2, 4, 5, 1, 34, -1, 54, 1, -2]
  
  console.log(quickSort(testArr))