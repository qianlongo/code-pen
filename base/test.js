const compose = (cbs) => {
  let next = () => {}
  let len = cbs.length
  
  while (--len) {
    next = cbs[ len ].bind(null, next)
  }

  return next
}

const timeout1 = (next) => {
  setTimeout(() => {
    console.log(1)
    next()
  }, 300)
}

const timeout2 = (next) => {
  setTimeout(() => {
    console.log(2)
    next()
  }, 200)
}

const timeout3 = (next) => {
  setTimeout(() => {
    console.log(3)
    next()
  }, 100)
}

// timeout1.bind(null, timeout2.bind(null, timeout3.bind(null, () => {})))()


compose([ timeout1, timeout2, timeout3 ])()