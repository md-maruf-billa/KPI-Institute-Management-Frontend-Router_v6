import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import { GenarateRoutes } from '../utils/RouteGenarator'
import { AdminRoutesPaths } from './AdminRoutes'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <App />,
    children: GenarateRoutes(AdminRoutesPaths)
  }
])

export default Router
