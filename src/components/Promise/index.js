// Promise.reject(1)
//   .then(
//     (res) => {
//       console.log(res)
//       return res + 1
//     },
//     (error) => {
//       throw new Error(error)
//     }
//   )
//   .then((res) => {
//     console.log(res)
//   })
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('timer')
//     resolve('success')
//   }, 1000)
// })
// const start = Date.now();
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。

// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

// Promise.resolve()
//   .then(
//     function success(res) {
//       throw new Error('error2!!!')
//     },
//     function fail1(err) {
//       console.log('fail1', err)
//     }
//   )
//   .catch(function fail2(err) {
//     console.log('fail2', err)
//   })

// Promise.resolve('1')
//   .finally(() => {
//     console.log('finally')
//   })
//   .then((res) => {
//     console.log(res)
//   })
// Promise.resolve('2')
//   .finally(() => {
//     console.log('finally2')
//     return '我是finally2返回的值'
//   })
//   .then((res) => {
//     console.log('finally2后面的then函数', res)
//   })

// function promise1() {
//   let p = new Promise((resolve) => {
//     console.log('promise1')
//     resolve('1')
//   })
//   return p
// }
// function promise2() {
//   return new Promise((resolve, reject) => {
//     reject('error')
//   })
// }
// promise1()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('finally1'))

// promise2()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log('finally2'))

// let p1 = Promise.resolve('Success 1')
// let p2 = Promise.reject('Error!')
// let p3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Success 3'))

// Promise.all([p1, p2, p3]).catch((error) => console.log(error))
// 输出 "Error!"，并且不会等待 p3 的结果
import MyPromise from './MyPromiseAgain.js'
// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 2000)
//   // resolve(3)
//   // reject(2)
// })
// p.then(
//   (res) => {
//     console.log('1')
//     console.log('res', res)
//   },
//   (error) => {
//     console.log('error', error)
//   }
// )
// p.then(
//   (res) => {
//     console.log('2')
//     console.log('res', res)
//   },
//   (error) => {
//     console.log('error', error)
//   }
// )
// const promise = new MyPromise((resolve, reject) => {
//   // 目前这里只处理同步的问题
//   resolve('success')
// })

// function other() {
//   return new MyPromise((resolve, reject) => {
//     resolve('other')
//   })
// }
// promise
//   .then((value) => {
//     console.log(1)
//     console.log('resolve', value)
//     return other()
//   })
//   .then((value) => {
//     console.log(2)
//     console.log('resolve', value)
//   })
// const promise = new MyPromise((resolve, reject) => {
//   resolve('success')
//   // throw new Error('执行器错误')
// })

// // 第一个then方法中的错误要在第二个then方法中捕获到
// promise
//   .then(
//     (value) => {
//       console.log(1)
//       console.log('resolve', value)
//       throw new Error('then error')
//     },
//     (reason) => {
//       console.log(2)
//       console.log(reason.message)
//     }
//   )
//   .then(
//     (value) => {
//       console.log(3)
//       console.log(value)
//     },
//     (reason) => {
//       console.log(4)
//       console.log(reason.message)
//     }
//   )
// const promise = new MyPromise((resolve, reject) => {
//   // resolve('succ')
//   reject('2')
// })

// MyPromise.resolve().then((resolve, reject) => {
//   resolve(1)
// })
MyPromise.resolve()
  .then(() => {
    console.log(0)
    return MyPromise.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })
