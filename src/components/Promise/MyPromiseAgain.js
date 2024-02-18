const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  status = PENDING
  value = null
  reason = null
  resolveCallbackList = []
  rejectCallbackList = []
  resolve = (value) => {
    // 这行容易漏
    if (this.status === PENDING) {
      this.value = value
      this.status = FULLFILLED
      while (this.resolveCallbackList.length) {
        this.resolveCallbackList.shift()(value)
      }
    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.reason = reason
      this.status = REJECTED
      while (this.rejectCallbackList.length) {
        this.rejectCallbackList.shift()(reason)
      }
    }
  }
  then(resolveCallback, rejectCallback) {
    resolveCallback =
      typeof resolveCallback === 'function' ? resolveCallback : (value) => value
    rejectCallback =
      typeof rejectCallback === 'function'
        ? rejectCallback
        : (reason) => {
            throw reason
          }
    const chainPromise = new MyPromise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        queueMicrotask(() => {
          try {
            const x = resolveCallback(this.value)
            resolvePromise(chainPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === REJECTED) {
        rejectCallback(this.reason)
      } else if (this.status === PENDING) {
        this.resolveCallbackList.push(resolveCallback)
        this.rejectCallbackList.push(rejectCallback)
      }
    })
    return chainPromise
  }
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value
    }
    return new MyPromise((resolve) => {
      resolve(value)
    })
  }
  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason)
    })
  }
}
const resolvePromise = (chainPromise, x, resolve, reject) => {
  if (chainPromise === x) {
    return reject(new TypeError('chain ==='))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}
export default MyPromise
