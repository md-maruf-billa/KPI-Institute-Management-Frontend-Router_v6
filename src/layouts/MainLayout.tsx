import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'

import { AdminChildItemsForLayout } from '../routes/AdminRoutes'

const { Sider, Header, Content, Footer } = Layout
const MainLayout = () => {
  return (
    <Layout>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['4']}
          items={AdminChildItemsForLayout}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
