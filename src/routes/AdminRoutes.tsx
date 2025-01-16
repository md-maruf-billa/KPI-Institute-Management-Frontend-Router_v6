import { createElement } from 'react'
import {
  UsergroupAddOutlined,
  UserOutlined,
  HomeOutlined,
  CodeSandboxOutlined,
  WalletOutlined,
  ExperimentOutlined
} from '@ant-design/icons'
import CreateAdmin from '../pages/Admin/CreateAdmin'
import CreateFaculty from '../pages/Admin/CreateFaculty'
import CreateStudent from '../pages/Admin/CreateStudent'
import AdminOverview from '../pages/Admin/AdminOverview'
import AcademicSemester from '../pages/Admin/AcademicManagement/AcademicSemester'
import CreateAcademicSemester from '../pages/Admin/AcademicManagement/CreateAcademicSemester'
import CreateAcademicFaculty from '../pages/Admin/AcademicManagement/CreateAcademicFaculty'
import AcademicFaculty from '../pages/Admin/AcademicManagement/AcademicFaculty'
import CreateAcademicDepartment from '../pages/Admin/AcademicManagement/CreateAcademicDepartment'
import AcademicDepartment from '../pages/Admin/AcademicManagement/AcademicDepartment'



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
  },
  {
    key: 5,
    label: 'Academic Management',
    path: '/admin',
    element: null,
    icon: createElement(CodeSandboxOutlined),
    children: [
      {
        key: 6,
        path: 'create-academic-semester',
        label: "Create A. Semester",
        icon: createElement(ExperimentOutlined),
        element: <CreateAcademicSemester />
      },
      {
        key: 7,
        path: 'runnig-academic-semester',
        label: "Runnig A. Semester",
        icon: createElement(WalletOutlined),
        element: <AcademicSemester />
      },
      {
        key: 8,
        path: 'create-academic-faculty',
        label: "Create A. Faculty",
        icon: createElement(ExperimentOutlined),
        element: <CreateAcademicFaculty />
      },
      {
        key: 9,
        path: 'runnig-academic-faculty',
        label: "Runnig A. Faculty",
        icon: createElement(WalletOutlined),
        element: <AcademicFaculty />
      },
      {
        key: 10,
        path: 'create-academic-department',
        label: "Create A. Department",
        icon: createElement(ExperimentOutlined),
        element: <CreateAcademicDepartment />
      },
      {
        key: 11,
        path: 'runnig-academic-department',
        label: "Runnig A. Department",
        icon: createElement(WalletOutlined),
        element: <AcademicDepartment />
      },
    ]
  }
]
