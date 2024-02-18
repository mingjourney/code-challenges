const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  status = PENDING
  value = null
  reason = null
  fcb = []
  rcb = []
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULLFILLED
      this.value = value
      while (this.fcb.length) {
        this.fcb.shift()(value)
      }
    }
  }
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.rcb.length) {
        this.rcb.shift()(reason)
      }
    }
  }
  then(onFullfilled, onRejected) {
    // const promise = new MyPromise((resolve, reject) => {})
    if (this.status === FULLFILLED) {
      onFullfilled(this.value)
    } else if (this.status === REJECTED) {
      onRejected(this.reason)
    } else if (this.status === PENDING) {
      this.fcb.push(onFullfilled)
      this.rcb.push(onRejected)
    }
  }
}
export default MyPromise
