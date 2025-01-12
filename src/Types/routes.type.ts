import { ReactNode } from 'react'

export type TRoutes = {
  path: string
  element: ReactNode
}
export type TLayoutes = {
  key: number
  path: string
  label: ReactNode
  icon: ReactNode
  children?: TLayoutes[]
}
export type TRouteProps = {
  key: number
  label: ReactNode
  path: string
  element?: ReactNode
  icon?: ReactNode
  children?: TRouteProps[]
}
