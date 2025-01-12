import { Button, Flex } from 'antd'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Hello This is Home page</h1>

      <Flex wrap gap='small'>
        <Button type='primary' danger>
         <Link to="/login">Login NOw</Link>
        </Button>
        <Button danger>Default</Button>
        <Button type='dashed' danger>
          Dashed
        </Button>
        <Button type='text' danger>
          Text
        </Button>
        <Button type='link' danger>
          Link
        </Button>
      </Flex>
    </div>
  )
}

export default Home
