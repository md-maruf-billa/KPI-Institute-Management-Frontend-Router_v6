import { Layout, } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const {  Header, Content } = Layout
const MainLayout = () => {
  return (
    <Layout className='layout-container'>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 , position:"sticky", top:0, zIndex:5}} />
        <Content style={{ margin: '24px 16px 0' }}>
          
            <Outlet />
         
        </Content>
        
      </Layout>
    </Layout>
  )
}

export default MainLayout
