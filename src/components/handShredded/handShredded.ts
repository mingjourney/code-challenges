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
