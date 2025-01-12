import { createElement } from 'react'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import FacultyOverview from '../pages/Faculty/FacultyOverview'
import FacultyProfile from '../pages/Faculty/FacultyProfile'

export const FacultyRoutesPaths = [
  {
    key: 0,
    path: '',
    label: 'Overview',
    icon: createElement(HomeOutlined),
    element: <FacultyOverview />
  },
  {
    key: 1,
    path: 'profile-setting',
    label: 'Profile Settings',
    icon: createElement(SettingOutlined),
    element: <FacultyProfile />
  }
]
