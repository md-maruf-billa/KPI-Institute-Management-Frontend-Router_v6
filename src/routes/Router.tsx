import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import { AdminChildRoutes } from './AdminRoutes'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <App />,
    children: AdminChildRoutes
  }
])

export default Router
