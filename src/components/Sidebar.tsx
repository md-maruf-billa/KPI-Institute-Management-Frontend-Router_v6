import { Button, Layout, Menu } from 'antd'
import { GenarateSideBarItems } from '../utils/LayoutItemsGenarator'
import { AdminRoutesPaths } from '../routes/AdminRoutes'
import { FacultyRoutesPaths } from '../routes/FacultyRoutes'
import { StudentRoutePaths } from '../routes/StudentRoutes'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout } from '../redux/features/auth/authSlice'
import { toast } from 'sonner'
import { selectCurrentUser } from '../redux/store'
const { Sider, Header } = Layout

const userRole = {
  ADMIN: 'admin',
  STUDENT: 'student',
  FACULTY: 'faculty'
}
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser)
  let currentLayouts

  switch (user!.role) {
    case userRole.ADMIN:
      currentLayouts = GenarateSideBarItems(AdminRoutesPaths, userRole.ADMIN)
      break
    case userRole.FACULTY:
      currentLayouts = GenarateSideBarItems(
        FacultyRoutesPaths,
        userRole.FACULTY
      )
      break
    case userRole.STUDENT:
      currentLayouts = GenarateSideBarItems(StudentRoutePaths, userRole.STUDENT)
      break

    default:
      break
  }

  const handelLogout = () => {
    dispatch(logout())
    toast.success("You have logged out")
  }
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      style={{height:"100vh", position:"sticky", top:0} }

    >
      <Header></Header>

      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['0']}
        items={currentLayouts}
      />


      <Button className='logout-button' color='gold' onClick={handelLogout}>
        Logout
      </Button>

    </Sider>
  )
}

export default Sidebar
