import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from '@ant-design/icons'
import CodingBoard from '../pages/CodingBoard'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'

const { Header, Content, Sider } = Layout
// console.log([1, 2, 4, 5, 6].shift())
const items1: MenuProps['items'] = [
  { key: '/algoraithms', label: '算法' },
  { key: '/test', label: '测试' }
]
// ;(function () {
//   console.log(arguments.slice)
// })(1, 2, 3)
const items2: MenuProps['items'] = [
  {
    key: 'sub1',
    icon: <UserOutlined />,
    label: 'subnav 1',
    children: [
      { key: '1', label: 'option1' },
      { key: '2', label: 'option2' },
      { key: '3', label: 'option3' },
      { key: '4', label: 'option4' }
    ]
  },
  {
    key: 'sub2',
    icon: <LaptopOutlined />,
    label: 'subnav 2',
    children: [
      { key: '5', label: 'option5' },
      { key: '6', label: 'option6' },
      { key: '7', label: 'option7' },
      { key: '8', label: 'option8' }
    ]
  },
  {
    key: 'sub3',
    icon: <NotificationOutlined />,
    label: 'subnav 3',
    children: [
      { key: '9', label: 'option9' },
      { key: '10', label: 'option10' },
      { key: '11', label: 'option11' },
      { key: '12', label: 'option12' }
    ]
  }
]
const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer
            }}
          >
            <CodingBoard />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
