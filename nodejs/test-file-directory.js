const fs = require('fs')
const pathStr = './router/'

console.log(fs.existsSync(pathStr))

try {  
  const stat = fs.lstatSync(pathStr)
  console.log(stat.isDirectory(), stat.isFile())
  // console.log(stat.isFile())
} catch (e) {
  console.log(e)
}

