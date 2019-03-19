const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'

function myPromise (fn) {
  const that = this

  that.state = PENDING
  that.value = null
  that.resolveCallBacks = []
  that.rejectCallBacks = []

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }

  function resolve (value) {
    if (that.state === PENDING) {
      this.state = RESOLVE
      this.value = value
      this.resolveCallBacks.forEach((cb) => cb(that.value))
    }
  }

  function reject (value) {
    if (that.state === PENDING) {
      this.state = REJECT
      this.value = value
      this.rejectCallBacks.forEach((cb) => cb(that.value))
    }
  }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this

  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
  onRejected = typeof onRejected === 'function' ? onRejected : (e) => {
    throw(e)
  }

  if (that.state === PENDING) {
    this.resolveCallBacks.push(onFulfilled)
    this.rejectCallBacks.push(onRejected)
  }

  if (that.state === RESOLVE) {
    onFulfilled(that.value)
  }

  if (that.state === REJECT) {
    onRejected(that.value)
  }
}

