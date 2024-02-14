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

let p1 = Promise.resolve('Success 1')
let p2 = Promise.reject('Error!')
let p3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Success 3'))

Promise.all([p1, p2, p3]).catch((error) => console.log(error))
// 输出 "Error!"，并且不会等待 p3 的结果
