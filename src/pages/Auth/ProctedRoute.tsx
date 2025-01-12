import { ReactNode } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { getToken } from '../../redux/store'
import { Navigate, useLocation } from 'react-router-dom'

const ProctedRoute = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
  const token = useAppSelector(getToken)

  if (!token) return <Navigate to='/login' replace={true} state={location.pathname}/>
  return children
}

export default ProctedRoute