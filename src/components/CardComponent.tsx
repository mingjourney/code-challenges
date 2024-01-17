// CardComponent.tsx
import React from 'react'
import { Card } from 'antd'

interface CardComponentProps {
  title: string
  data: any
}

const CardComponent: React.FC<CardComponentProps> = ({ title, data }) => {
  return (
    <Card hoverable size="small" title={title} style={{ margin: '0px' }}>
      <div> 结果：{data ? data.toString() : 'void'}</div>
    </Card>
  )
}

export default CardComponent
