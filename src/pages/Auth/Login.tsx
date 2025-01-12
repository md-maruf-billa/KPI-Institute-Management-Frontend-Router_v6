import { Button, Form } from 'antd'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../redux/features/auth/authAPI'
import { jwtDecode } from 'jwt-decode'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/features/auth/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

type TAdminInfo = {
  id: string
  password: string
}
const Login = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'admin123'
    }
  })

  const [login] = useLoginMutation()

  const handelLogin = async (data: TAdminInfo) => {
    const res = await login(data).unwrap()
    const user = jwtDecode(res.data.accessToken)
    dispatch(setUser({ user, token: res.data.accessToken }))
    navigate(state)
  }
  return (
    <div className='login-form-container'>
      <Form
        onSubmitCapture={handleSubmit(handelLogin)}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete='off'
        className='form'
      >
        <Form.Item
          label='Id'
          name='username'
          className='form-inpurt'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <input {...register('id')} />
        </Form.Item>

        <Form.Item
          className='form-inpurt'
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <input {...register('password')} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
