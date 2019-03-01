for (let i = 1; i <= 9; i++) {
  let str = ''
  for (let j = 1; j <= i; j++) {
    str += `${j} * ${i} = ${ i * j }  `
  }
  console.log(str)
}
