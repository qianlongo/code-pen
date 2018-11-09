function DataBinder (id) {
  let pubSub = {
    callbacks: {},
    on (evtName, cb) {
      let cbs = this.callbacks[evtName]
      cbs ? cbs.push(cb) : this.callbacks[evtName] = [cb]
    },
    trigger (evtName) {
      let cbs = this.callbacks[evtName]
      let args = Array.from(arguments).slice(1)

      if (cbs) {
        cbs.forEach((v) => {
          v.apply(null, args)
        })
      }
    }
  }

  let dataAttr = `data-bind-${id}`
  let evtName = `${id}:change`
  let changeHandler = function (e) {
    e = e || window.event
    let target = e.target || e.srcElement
    let propName = target.getAttribute(dataAttr)

    if (propName) {
      pubSub.trigger(evtName, propName, target.value)
    }
  }

  document.addEventListener('change', changeHandler, false)
  document.addEventListener('input', changeHandler, false)

  pubSub.on(evtName, function (propName, val) {
    let eles = document.querySelectorAll(`[${dataAttr}]`)

    Array.from(eles).forEach((ele) => {
      let prop = ele.getAttribute(dataAttr)
      if (ele.tagName === 'INPUT' && prop === propName) {
        ele.value = val
      } else {
        ele.innerHTML = val
      }
    })
  })

  return pubSub
}