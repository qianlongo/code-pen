// 冒泡排序，没轮提升一个最大值到最后
// 这种写法需要比较的次数是 (n * (n - 1)) / 2
((pause) => {
  if (pause) return

  Array.prototype.sort1 = function () {
    let count = 0
    let len = this.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        count++
        if (this[j] > this[j + 1]) {
          let temp = this[j]
          this[j] = this[j + 1]
          this[j + 1] = temp
        }
      }
    }
    console.log(count)
  }

  let testArr = [1, 2, 3, 3, 12, -1, 0, 456, 32, 1, -234, 120]
  testArr.sort1()
  console.log(testArr)
})(1)

// 选择排序
// 首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，
// 然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。

;((pause) => {
  if (pause) return

  Array.prototype.sort2 = function () {
    let len = this.length
    let minIndex, temp
    let count = 0
    for (let i = 0; i < len; i++) {
      minIndex = i
      for (let j = i + 1; j < len; j++) {
        count++
        if (this[j] < this[minIndex]) {
          minIndex = j
        }
      }

      if (minIndex !== i) {
        temp = this[i]
        this[i] = this[minIndex]
        this[minIndex] = temp
      }
    }
    console.log(count)
  }

  let testArr = [1, 2, 3, 3, 12, -1, 0, 456, 32, 1, -234, 120]
  testArr.sort2()
  console.log(testArr)
})(1)

;((pause) => {
  if (pause) return

  Array.prototype.sort3 = function () {
    let len = this.length,
        value,                      // 当前比较的值
        i,                          // 未排序部分的当前位置
        j                           // 已排序部分的当前位置
    
    for (i = 1; i < len; i++) {
      // 储存当前位置的值
      value = this[i]
      /*
        * 当已排序部分的当前元素大于value，
        * 就将当前元素向后移一位，再将前一位与value比较
        */
      for (j = i-1; j >= 0 && this[j] > value; j--) {
        // if () {
          this[j+1] = this[j]
        // }
      }
      this[j+1] = value;
    }
  }

  let testArr = [3, 2, 4, 5, 1]
  testArr.sort3()
  console.log(testArr)

})(1)

;((pause) => {
  if (pause) return

  Array.prototype.sort4 = function () {
    let len = this.length,
        value,
        i,
        j

    for (i = 1; i < len; i++) {
      value = this[i]
      for (j = i - 1; j >= 0 && this[j] > value;j--) {
        this[j + 1] = this[j]
      }
      this[j + 1] = value
    }
  }

  let testArr = [3, 2, 4, 5, 1]
  testArr.sort4()
  console.log(testArr)
})(1)

;((pause) => {
  if (pause) return

  let quickSort = (arr) => {
    if (arr.length <= 1) return arr

    let middleVal = arr.splice(Math.floor(arr.length / 2), 1)[0]
    let leftArr = []
    let rightArr = []

    for (let i = 0, len = arr.length; i < len; i++) {
      let tempVal = arr[i]
      if (tempVal < middleVal) {
        leftArr.push(tempVal)
      } else {
        rightArr.push(tempVal)
      }
    }

    return quickSort(leftArr).concat(middleVal, quickSort(rightArr))
  }

  let testArr = [3, 2, 4, 5, 1, 34, -1, 54, 1, -2]
  
  console.log(quickSort(testArr))
})()


