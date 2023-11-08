import { memo } from 'react'
interface Props {
  request: () => void
}

const Index = (props: Props) => {
  console.log('re-render')
  return <button onClick={props.request}>按钮</button>
}

export default memo(Index)
