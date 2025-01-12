import { createElement, ReactNode } from 'react'
import { UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import CreateAdmin from '../pages/Admin/CreateAdmin'
import CreateFaculty from '../pages/Admin/CreateFaculty'
import CreateStudent from '../pages/Admin/CreateStudent'

// type define
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

// for routes
export const AdminChildRoutes: TRoutes[] = []

RoutePaths.forEach(el => {
  if (el.label && el.path && el.element) {
    AdminChildRoutes.push({
      path: el.path,
      element: el.element
    })
  }
  if (el.children) {
    el.children.forEach(child => {
      AdminChildRoutes.push({
        path: child.path,
        element: child.element
      })
    })
  }
})

//  for layout design
export const AdminChildItemsForLayout: TLayoutes[] = []

RoutePaths.forEach(el => {
  if (el.label && el.path && el.element) {
    // Add routes with no children directly
    AdminChildItemsForLayout.push({
      key: el.key,
      path: el.path,
      label: el.label,
      icon: el.icon
    })
  }
  if (el.children) {
    // Add routes with children
    AdminChildItemsForLayout.push({
      key: el.key,
      label: el.label,
      icon: el.icon,
      path: el.path,
      children: el.children.map(elm => ({
        key: elm.key,
        path: elm.path,
        label: elm.label,
        icon: elm.icon
      }))
    })
  }
})
