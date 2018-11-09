// 冒泡排序

let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

((pause) => {
  if (pause) return

  Array.prototype.sort1 = function () {
    let len = this.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (this[j] > this[j + 1]) {
          swap(this, i, j)
        }
      }
    }
  }

  let testArr = [1, 2, 3, 4, 4, -1, 23, -134, 45, 1]
  testArr.sort1()
  console.log(testArr)
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.sort2 = function () {
    let len = this.length
    let minIndex
    
    for (let i = 0; i < len; i++) {
      minIndex = i
      for (let j = i + 1; j < len; j++) {
        if (this[j] < this[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        let temp = this[i]
        this[i] = this[minIndex]
        this[minIndex] = temp
      }
    }
  }

  let testArr = [1, 2, 3, 4, 4, -1, 23, -134, 45, 1]
  testArr.sort2()
  console.log(testArr)
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.sort3 = function () {
    let len = this.length
    let hasSort = [this[0]]
    let value

    for (let i = 1; i < len; i++){
      value = this[i]
      for (let j = hasSort.length - 1; j >=0; j--) {
        if (value >= hasSort[j]) {
          hasSort.splice(j + 1, 0, value)
          break
        }
      }
      if (hasSort.indexOf(value) === - 1) {
        hasSort.splice(0, 0, value)
      }
    }

    return hasSort
  }
  
  let testArr = [1, 2, 3, 4, 4, -1, 23, -134, 45, 1]
  console.log(testArr.sort3())
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.sort4 = function () {
    let len = this.length
    let value
    let j

    for (let i = 1; i < len; i++){
      value = this[i]
      for (j = i - 1; j >=0 && this[j] > value; j--) {
        this[j + 1] = this[j]
      }
      this[j + 1] = value
    }
  }
  
  let testArr = [1, 2, 3, 4, 4, -1, 23, -134, 45, 1]
  testArr.sort4()
  console.log(testArr)
})()

;((pause) => {
  if (pause) return

  let quickSort = (arr) => {
    let len = arr.length

    if (len <= 1) return arr

    let middleVal = arr.splice(Math.floor(len / 2), 1)[0]
    let leftArr = []
    let rightArr = []

    for (let i = 0; i < len - 1; i++) {
      let temp = arr[i]
      if (temp >= middleVal) {
        rightArr.push(temp)
      } else {
        leftArr.push(temp)
      }
    }

    return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
  }

  let testArr = [1, 2, 3, 4, 4, -1, 23, -134, 45, 1]
  
  console.log(quickSort(testArr))
})(1)