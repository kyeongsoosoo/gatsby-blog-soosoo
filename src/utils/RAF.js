export function toFit(
    cb
  ) {
    if (!cb) {
      throw Error('Invalid required arguments')
    }
  
    let tick = false
  
    return function() {
      console.log('scroll call')
  
      if (tick) {
        return
      }
  
      tick = true
      return requestAnimationFrame(() => {
          console.log('real call')
          tick = false
          return cb()
      })
    }
  }