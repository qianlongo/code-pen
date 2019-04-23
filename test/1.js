const repeatEle = (array) => {
  let repeatArray = []

  array.forEach((val) => {
    !repeatArray.includes(val) && array.indexOf(val) !== array.lastIndexOf(val) && repeatArray.push(val)
  })

  return repeatArray
}

console.log(repeatEle([ 1, 2, 3, 4, 5, -1, 45, 1, 4, 5 ]))