import { createElement, ReactNode } from 'react'
import { UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import CreateAdmin from '../pages/Admin/CreateAdmin'
import CreateFaculty from '../pages/Admin/CreateFaculty'
import CreateStudent from '../pages/Admin/CreateStudent'

// Type definitions
type TRoutes = {
  path: string
  element: ReactNode
}
type TLayoutes = {
  key: number
  path: string
  label: ReactNode
  icon: ReactNode
  children?: TLayoutes[]
}

// RoutePaths definition
const RoutePaths = [
  {
    key: 0,
    path: '/admin',
    label: <Link to='/admin'>Overview</Link>,
    element: null
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
        label: <Link to={'/admin/create-admin'}>Create Admin</Link>,
        icon: createElement(UserOutlined),
        element: <CreateAdmin />
      },
      {
        key: 3,
        path: 'create-faculty',
        label: <Link to={'/admin/create-faculty'}>Create Faculty</Link>,
        icon: createElement(UserOutlined),
        element: <CreateFaculty />
      },
      {
        key: 4,
        path: 'create-student',
        label: <Link to={'/admin/create-student'}>Create Student</Link>,
        icon: createElement(UserOutlined),
        element: <CreateStudent />
      }
    ]
  }
]

// Using reduce for AdminChildRoutes
export const AdminChildRoutes: TRoutes[] = RoutePaths.reduce<TRoutes[]>(
  (acc, el) => {
    if (el.element) {
      acc.push({ path: el.path, element: el.element })
    }
    if (el.children) {
      acc.push(
        ...el.children.map(child => ({
          path: child.path,
          element: child.element
        }))
      )
    }
    return acc
  },
  []
)

// Using reduce for AdminChildItemsForLayout
export const AdminChildItemsForLayout: TLayoutes[] = RoutePaths.reduce<
  TLayoutes[]
>((acc, el) => {
  if (el.element) {
    acc.push({
      key: el.key,
      path: el.path,
      label: el.label,
      icon: el.icon
    })
  }
  if (el.children) {
    acc.push({
      key: el.key,
      label: el.label,
      icon: el.icon,
      path: el.path,
      children: el.children.map(child => ({
        key: child.key,
        path: child.path,
        label: child.label,
        icon: child.icon
      }))
    })
  }
  return acc
}, [])
