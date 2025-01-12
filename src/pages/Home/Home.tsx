import { Button, Flex } from 'antd'

const Home = () => {
  return (
    <div>
      <h1>Hello This is Home page</h1>

      <Flex wrap gap='small'>
        <Button type='primary' danger>
          Primary
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
