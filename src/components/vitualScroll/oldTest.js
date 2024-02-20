document.getElementById('button').addEventListener('click', () => {
  let now = Date.now()
  const ul = document.getElementById('container')
  const total = 100000
  for (let i = 0; i < total; i++) {
    const li = document.createElement('li')
    li.innerHTML = ~~(Math.random() * total)
    ul.append(li)
  }
  console.log('js运行时间', Date.now() - now)
  setTimeout(() => {
    console.log('总时间', Date.now() - now)
  })
})
