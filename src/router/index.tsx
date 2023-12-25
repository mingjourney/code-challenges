import React, { lazy } from 'react'
// import Home from '../views/Home'
// import About from '../views/About'
const OnlineThreeDClassroom = lazy(
  () => import('../views/OnlineThreeDClassroom')
)
const Home = lazy(() => import('../views/Home'))
//路由新写法
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
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
    path: '/online3d',
    element: withLoadingComponent(<OnlineThreeDClassroom />)
  }
]
export default routes
