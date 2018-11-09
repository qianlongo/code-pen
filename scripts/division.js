//1,234 12,345 123,456 数字分割
let division = (num) => {
  num = String(num)
  let len = num.length
  let remainder = len % 3
  let startIndex = remainder ? remainder : 3
  let resultNum = `${num.slice(0, startIndex)},`

  for (; startIndex < len; startIndex += 3) {
    resultNum += `${num.slice(startIndex, startIndex + 3)},`
  }

  return resultNum.replace(/\,$/, '')
}

let testNum = String(1)

for (let i = 0; i < 20; i++) {
  console.log(division(testNum))
  testNum += i
}