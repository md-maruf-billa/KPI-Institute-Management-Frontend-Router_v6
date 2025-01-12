import { createElement } from 'react'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import StudentOverview from '../pages/Student/StudentOverview'
import StudentProfile from '../pages/Student/StudentProfile'

export const StudentRoutePaths = [
  {
    key: 0,
    path: '',
    label: 'Overview',
    icon: createElement(HomeOutlined),
    element: <StudentOverview />
  },
  {
    key: 1,
    path: 'profile-setting',
    label: 'Profile Settings',
    icon: createElement(SettingOutlined),
    element: <StudentProfile />
  }
]
