class EventControl {
  constructor() {
    this.eventCol = {}
  }
  subscribe(type, cb) {
    if (!this.eventCol[type]) {
      this.eventCol[type] = []
    }
    this.eventCol[type].push(cb)
  }
  publish(type, ...args) {
    if (this.eventCol[type]) {
      this.eventCol[type].forEach((cb) => {
        cb(args)
      })
    }
  }
  unSubscribe(type, cb) {
    if (this.eventCol[type]) {
      const cbIndex = this.eventCol[type].findIndex((item) => {
        console.log('item', item)
        console.log('cb', cb)
        console.log('compare', item === cb)
        return item === cb
      })
      console.log(cbIndex)
      if (cbIndex != -1) {
        this.eventCol[type].splice(cbIndex, 1)
      }
    }
  }
}
const fn1 = (args) => {
  console.log('aa事件调用回调 用户11收到', ...args)
}
const ec = new EventControl()
ec.subscribe('aa', fn1)
ec.subscribe('aa', (args) => {
  console.log('aa事件调用回调 用户22收到', ...args)
})
ec.subscribe('bb', (args) => {
  console.log('bb事件调用回调 用户11收到', ...args)
})
ec.subscribe('bb', (args) => {
  console.log('bb事件调用回调 用户33收到', ...args)
})
ec.subscribe('bb', (args) => {
  console.log('bb事件调用回调 用户44收到', ...args)
})
ec.unSubscribe('aa', fn1)
setTimeout(() => {
  ec.publish('aa', 'zzzzz', 'ggggg')
})
