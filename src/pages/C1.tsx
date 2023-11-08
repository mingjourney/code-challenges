import { useState } from 'react'
import usePow from './usePow'
// import Foo from './Foo'
function App() {
  const list = usePow([1, 2, 3, 4])
  console.log(list)

  const list2 = usePow([1, 2])
  console.log(list2)

  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {/* <Foo /> */}
    </>
  )
}
export default App
