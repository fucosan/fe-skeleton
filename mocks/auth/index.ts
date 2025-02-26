import { admin } from './data';
import { delay, HttpResponse } from 'msw';
import { api } from '../utils';
import { ACCESS_TOKEN } from '@/lib/constants';
import { ResAuth, ResOtp, ResSignIn } from '@/types/response';

export default [
  api.post('/sign-in', async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    await delay(3000);

    if (email != admin.email || password != "1234") {
      return HttpResponse.json<ResSignIn>({
        user: null,
        status: 'UNAUTHENTICATED',
      }, { status: 401 });
    }

    return HttpResponse.json<ResSignIn>({
      user: admin,
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

  api.post('/otp', async ({ request }) => {
    await delay(3000);
    const data = await request.formData();
    const otp = data.get("pin");
    if (otp !== '1234') {
      return HttpResponse.json<ResOtp>({
        user: null,
        status: 'UNAUTHENTICATED',
        accessToken: ''
      });
    }
    return HttpResponse.json<ResOtp>({
      user: admin,
      status: 'AUTHENTICATED',
      accessToken: 'newAccessToken'
    })
  }),
  api.get('/refresh', () => {
    const session = sessionStorage.getItem(ACCESS_TOKEN);
    return HttpResponse.json({
      accessToken: 'newAccessToken'
    }, { status: session ? 200 : 403 })
  }),
  api.post('/sign-out', () => {
    return HttpResponse.json({
      message: 'Sign out success'
    })
  }),
];

