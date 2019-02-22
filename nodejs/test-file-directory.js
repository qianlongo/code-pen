const fs = require('fs')
const stat = fs.lstatSync('./router/index')

try {
  console.log(stat, stat.isDirectory())
  // console.log(stat.isFile())
} catch (e) {

}
