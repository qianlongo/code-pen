// 模拟call和apply的实现

Function.prototype.call2 = function (ctx) {
  let args = [], idx = 1, len = arguments.length

  cxt = ctx == null ? window : ctx // 传入null和undefined的时候，默认还是指向window
  ctx.fn = this
  
  for (idx; idx < len; idx++) {
    args.push('arguments['+ idx +']') // 注意这里用push可以防止args[0]没有值导致得ctx.fn(,arguments[1]...)出现的问题
  }
  let result = eval('ctx.fn(' + args + ')') // 解决动态传参
  delete ctx.fn
  return result // 返回结果值
}

Function.prototype.apply2 = function (ctx, array) {
  let args = [], idx = 0, len = array.length

  ctx = ctx == null ? window : ctx
  ctx.fn = this

  for (idx; idx < len; idx++) {
    args.push('array['+ idx +']')
  }

  let result = eval('ctx.fn('+ args +')')
  delete ctx.fn
  return result
}

let obj = {
  name: 'qianlongo'
}
let fn = function (sex) {
  console.log(this.name, sex)
  return this.name + sex
}
let fn2 = function (sex, age) {
  console.log(this.name, sex, age)
  return this.name + sex + age
}

console.log(fn.call2(obj, 'boy'))
console.log(fn.apply2(obj, ['boy', 100]))