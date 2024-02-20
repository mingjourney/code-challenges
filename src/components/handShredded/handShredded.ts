export const vueRectiveTest = () => {
  //define
  // fObjDefine()
  //useDefineBind
  // useDefineProperty()
  //useProxyBind
  return 'vue响应式-Object.defineProperty'
}
// const useDefineProperty = () => {
//   const data = {
//     msg: 'haha',
//     aa: 1,
//     bb: [2, 3, 4, 5, 2]
//   }
//   const vm = {}
//   Object.keys(data).forEach((key) => {
//     Object.defineProperty(vm, key, {
//       get() {
//         return data[key]
//       },
//       set(newValue) {
//         if (newValue === data[key]) {
//           return
//         }
//         data[key] = newValue
//       }
//     })
//   })
//   console.log('msg1', vm.msg)
//   vm.aa = '1'
//   vm.msg = 'xx'
//   console.log('msg2', vm.msg)
// }
// const fObjDefine = () => {
//   const a = {}
//   Object.defineProperty(a, 'property1', {
//     value: [333, 444],
//     writable: true
//   })
//   console.log('a1', a)
//   a.property1 = [2323, 424]
//   console.log('a2', a)
// }
// const f = (n) => Array.from({ length: Math.min(n, 7) }, (x, i) => i + 1)
// f(5)
// async function async1() {
//   console.log('1')
//   await async2()
//   console.log('2')
// }
// async function async2() {
//   console.log('3')
// }
// console.log('4')
// async1()
// setTimeout(() => {
//   console.log('5')
// }, 0)
// new Promise<void>((resolve) => {
//   console.log('6')
//   resolve()
// }).then(() => {
//   console.log('7')
// })
// console.log('8')
// console.log('aaa', Object.getPrototypeOf([]) === Array.prototype)
// //结果：4 1 3 2 5 6 7 8
// //微任务：7
// //宏任务：

// const square = (v: number) => v * v
// const double = (v: number) => v * 2
// const addOne = (v: number) => v + 1
// const pipe =
//   (...args: any) =>
//   (input: number): any => {
//     return args.reduce((acc: number, c: any) => c(acc), input)
//   }
// const res = pipe(square, double, addOne)
// console.log('res', res(3)) // 19

// const myInstanceof = (left: any, right: any) => {
//   while (left !== null) {
//     const leftPrototype = Object.getPrototypeOf(left)
//     if (leftPrototype === right.prototype) {
//       return true
//     }
//     left = leftPrototype
//   }
//   return false
// }
// console.log('结果', myInstanceof([], Number))
// export const myInstanceof = (left: any, right: any) => {
//   return Object.getPrototypeOf(left) === right.prototype
// }

// const a = {
//   name: 'aaaaaaaa',
//   showName(age: number, sex: string) {
//     console.log('name是', this.name, 'age是', age, 'sex是', sex)
//   }
// }
// a.showName(13, '男')
// const b = {
//   name: 'bbbbbbbb'
// }
// // a.showName.call(b, 88, '女')
// Function.prototype.myCall = function (obj, ...rest) {
//   obj = obj || window
//   const fn = Symbol()
//   obj[fn] = this
//   const res = obj[fn](...rest)
//   delete obj.fn
//   return res
// }

// Function.prototype.myApply = function (obj, arr) {
//   obj = obj || window
//   const fn = Symbol()
//   obj[fn] = this
//   const res = obj[fn](...arr)
//   delete obj[fn]
//   return res
// }
// a.showName.myCall(b, 1, '男2')
// a.showName.myApply(b, [100, '男3'])
export const myDeepClone = (obj: any, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (hash.has(obj)) return hash.get(obj)
  const cloneObj = new obj.constructor()
  hash.set(obj, cloneObj)
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = myDeepClone(obj[key], hash)
    }
  }
  return cloneObj
}
