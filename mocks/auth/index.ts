import { admin } from './data';
import { HttpResponse } from 'msw';
import { api } from '../utils';
import { ACCESS_TOKEN } from '@/lib/constants';
import { ResAuth, ResOtp, ResSignIn } from '@/types/response';

export default [
  api.post('/sign-in', () => {
    return HttpResponse.json<ResSignIn>({
      user: null,
      status: 'OTP_REQUIRED',
    })
  }),
  api.get('/auth', () => {
    const session = sessionStorage.getItem(ACCESS_TOKEN);
    if (!session) {
      return HttpResponse.json({
        message: 'Unauthorized'
      }, { status: 401 });
    }
    return HttpResponse.json<ResAuth>({
      user: admin,
      status: 'AUTHENTICATED',
    })
  }),
  api.post('/otp', () => {
    return HttpResponse.json<ResOtp>({
      user: admin,
      status: 'AUTHENTICATED',
      accessToken: 'newAccessToken'
    })
  }),
  api.get('/refresh', () => {
    return HttpResponse.json({
      accessToken: 'newAccessToken'
    }, { status: 403 })
  }),
  api.post('/sign-out', () => {
    return HttpResponse.json({
      message: 'Sign out success'
    })
  }),
];

