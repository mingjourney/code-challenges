import React, { lazy } from 'react'
// import Home from '../views/Home'
// import About from '../views/About'
const About = lazy(() => import('../views/About'))
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
    path: '/about',
    element: withLoadingComponent(<About />)
  }
]
export default routes
