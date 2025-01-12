import { Layout, Menu } from 'antd'
import { GenarateSideBarItems } from '../utils/LayoutItemsGenarator'
import { AdminRoutesPaths } from '../routes/AdminRoutes'
import Logo from '../assets/Logo'
import { Link } from 'react-router-dom'
import { FacultyRoutesPaths } from '../routes/FacultyRoutes'
import { StudentRoutePaths } from '../routes/StudentRoutes'
const { Sider } = Layout

const userRole = {
  ADMIN: 'admin',
  STUDENT: 'student',
  FACULTY: 'faculty'
}
const Sidebar = () => {
  const role = 'admin'
  let currentLayouts

  switch (role) {
    case userRole.ADMIN:
        currentLayouts = GenarateSideBarItems(AdminRoutesPaths, userRole.ADMIN)
      break
    case userRole.FACULTY:
        currentLayouts = GenarateSideBarItems(FacultyRoutesPaths, userRole.FACULTY)
      break
    case userRole.STUDENT:
        currentLayouts = GenarateSideBarItems(StudentRoutePaths, userRole.STUDENT)
      break

    default:
      break
  }

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={broken => {
        console.log(broken)
      }}
    >
      <div className='logo-container'>
        <Link to='/' className='logo'>
          <Logo />
        </Link>
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['4']}
        items={currentLayouts}
      />
    </Sider>
  )
}

export default Sidebar
