import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import { GenarateRoutes } from '../utils/RouteGenarator'
import { AdminRoutesPaths } from './AdminRoutes'
import { FacultyRoutesPaths } from './FacultyRoutes'
import { StudentRoutePaths } from './StudentRoutes'
import Login from '../pages/Auth/Login'
import ProctedRoute from '../pages/Auth/ProctedRoute'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: (
      <ProctedRoute>
        <App />
      </ProctedRoute>
    ),
    children: GenarateRoutes(AdminRoutesPaths)
  },
  {
    path: '/faculty',
    element: <App />,
    children: GenarateRoutes(FacultyRoutesPaths)
  },
  {
    path: '/student',
    element: <App />,
    children: GenarateRoutes(StudentRoutePaths)
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default Router
