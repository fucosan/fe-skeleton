export type User = {
  name: string
  email: string
  role: string
}

export type Status = 'UNAUTHENTICATED' | 'OTP_REQUIRED' | 'AUTHENTICATED';

export type ResSignIn = {
  user: null
  status: Status
}

export type ResSignOut = {
  message: string
}

export type ResRefresh = {
  accessToken: string
}

export type ResAuth = {
  user: User
  status: Status;
}

export type ResOtp = {
  user: User
  status: Status
  accessToken: string
}
