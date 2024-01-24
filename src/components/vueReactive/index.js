const data = {
  age: 12,
  name: 'gg',
  hobby: [2, 3, 4],
  cat: {
    age: 2,
    name: 'xx'
  }
}
const vm = {}
// Object.defineProperty(vm, 'age', {
//   get() {
//     return data.age
//   },
//   set(value) {
//     console.log('监听修改', value)
//     data.age = value
//     document.querySelector('#app').textContent = value
//   }
// })
Object.keys(data).forEach((keyName) => {
  Object.defineProperty(vm, keyName, {
    configurable: true,
    enumerable: true,
    get() {
      return data[keyName]
    },
    set(newValue) {
      if (newValue === data[keyName]) {
        return
      }
      data[keyName] = newValue
      document.querySelector('#app').textContent = data[keyName]
    }
  })
})
