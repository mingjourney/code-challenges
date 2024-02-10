import { Flex, Spin } from 'antd'
import React, { lazy } from 'react'
// import Home from '../views/Home'
// import About from '../views/About'
const VirtualScroll = lazy(
  () => import('@/components/virtualScroll/virtualScroll')
)
const Home = lazy(() => import('../views/Home'))
//路由新写法
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense
    fallback={
      <Flex align="center" gap="middle">
        <Spin />
      </Flex>
    }
  >
    {comp}
  </React.Suspense>
)
const routes = [
  {
    path: '/',
    element: withLoadingComponent(<Home />)
  },
  {
    path: '/home',
    element: withLoadingComponent(<Home />)
  },
  {
    path: '/virtualScroll',
    element: withLoadingComponent(<VirtualScroll />)
  }
]
export default routes
