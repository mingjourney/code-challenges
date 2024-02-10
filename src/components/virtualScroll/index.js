const startTime = Date.now()
document.getElementById('button').addEventListener('click', () => {
  for (let i = 0; i < 100000; i++) {
    const li = document.createElement('li')
    li.innerHTML = ~~(Math.random() * 10000)
    document.getElementById('container').appendChild(li)
  }
  console.log('js', Date.now() - startTime)
  setTimeout(() => {
    console.log('全部', Date.now() - startTime)
  }, 0)
})
