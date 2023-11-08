import { useCallback, useState } from 'react'
import Foo from './Foo'
import { Space } from 'antd'

function F1() {
  const request = useCallback(() => {
    setTimeout(() => {
      console.log('请求')
    }, 10)
  }, [])

  const [count, setCount] = useState(0)

  return (
    <>
      <Space>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <Foo request={request} />
      </Space>
    </>
  )
}

export default F1
