export type Tuser = {
  userId: string
  role: string
  exp: number
  iat: number
}

export type TAuthState = {
  user: null | Tuser
  token: null | string
}
