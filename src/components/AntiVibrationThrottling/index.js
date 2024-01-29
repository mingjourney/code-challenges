//为什么debounce只执行加载的一次？
function debounce(fn, delay) {
  //而且这里this也是window？
  let timer = null
  return function () {
    const args = arguments
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(ctx, args)
    }, delay)
  }
}
// this.a = 'zz'
let count = 0
const container = document.getElementById('container')
function dd(e) {
  container.innerHTML = count++
  console.log(this, e)
  // console.log('this', this, 'this.a', this.a, arg1, arg2)
}
// const cc = {
//   a: 'eeee'
// }
// dd.apply(cc, ['t', 'g'])
// dd.call(cc, 't', 'g')
container.onmousemove = debounce(dd, 1000)
// addEventListener('mousemove', dd)
// const recast = require('recast')
// const code1 = `a.b.c.d`推荐
// const code2 = `a['b']['c]['d']`
// const ast1 = recast.parse(code1)
// const ast2 = recast.parse(code2)
