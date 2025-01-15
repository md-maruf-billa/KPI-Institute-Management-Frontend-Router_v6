import { Button, Form, Input } from 'antd'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../redux/features/auth/authAPI'
import { jwtDecode } from 'jwt-decode'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/features/auth/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import CustomForm from '../../components/Customs/CustomForm'
import CustomInput from '../../components/Customs/CustomInput'

type TAdminInfo = {
  id: string
  password: string
}
const Login = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     id: 'A-0001',
  //     password: 'admin123'
  //   }
  // })

  const [login] = useLoginMutation()

  const handelLogin = async (data: TAdminInfo) => {
    console.log(data)
    const toastId = toast.loading('Loging .......', {})
    try {
      const res = await login(data).unwrap()
      const user = jwtDecode(res.data.accessToken)
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login success", { id: toastId })
      navigate(state || "/")
    } catch (err) {
      toast.error("Login failed", { id: toastId })
    }
  }
  return (
    <div className='login-page'>
      <div className='login-form-container'>
        <CustomForm onSubmit={handelLogin}>
          <div className='login-form-content'>
            <h1>Admin Login</h1>
            <CustomInput size='large' name='id' label='Enter Your User Id' />
            <CustomInput size='large' name='password' label='Enter Your password' />
            <Button type='primary' htmlType='submit'>
              Log in
            </Button>
          </div>
        </CustomForm>
      </div>
    </div>
  )
}

export default Login
