import { admin } from './data';
import { HttpResponse } from 'msw';
import { api } from '../utils';

export default [
  api.post('/sign-in', () => {
    return HttpResponse.json({
      user: {
        email: admin.email,
        role: 'admin',
      },
      accessToken: 'validAccessToken',
      refreshToken: 'validRefreshToken',
    })
  })
];

