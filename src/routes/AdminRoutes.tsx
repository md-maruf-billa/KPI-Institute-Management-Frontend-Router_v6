import { createElement } from 'react'
import {
  UsergroupAddOutlined,
  UserOutlined,
  HomeOutlined
} from '@ant-design/icons'
import CreateAdmin from '../pages/Admin/CreateAdmin'
import CreateFaculty from '../pages/Admin/CreateFaculty'
import CreateStudent from '../pages/Admin/CreateStudent'
import AdminOverview from '../pages/Admin/AdminOverview'


// RoutePaths definition
export const AdminRoutesPaths = [
  {
    key: 0,
    path: '',
    label: "Overview",
    icon: createElement(HomeOutlined),
    element: <AdminOverview />
  },
  {
    key: 1,
    label: 'User Management',
    path: '/admin',
    element: null,
    icon: createElement(UsergroupAddOutlined),
    children: [
      {
        key: 2,
        path: 'create-admin',
        label: "Create Admin",
        icon: createElement(UserOutlined),
        element: <CreateAdmin />
      },
      {
        key: 3,
        path: 'create-faculty',
        label: "Create Faculty",
        icon: createElement(UserOutlined),
        element: <CreateFaculty />
      },
      {
        key: 4,
        path: 'create-student',
        label: "Create Student",
        icon: createElement(UserOutlined),
        element: <CreateStudent />
      }
    ]
  }
]
