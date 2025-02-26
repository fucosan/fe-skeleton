import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN, EMAIL } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { ResOtp } from '@/types/response'
// import { useAuthQuery } from './auth-query';
import { OtpForm } from '@/types/otp';
import { toFormData } from '@/lib/utils';
import { router } from '@/lib/router';
import { getRouteApi } from '@tanstack/react-router';

const routeApi = getRouteApi('/_auth/otp');

export function useOTPMutation() {
  const queryClient = useQueryClient()
  // if (useAuthQuery().data?.status !== 'OTP_REQUIRED') {
  //throw new Error('User is not signed in')
  // }

  const { redirect } = routeApi.useSearch();

  return useMutation({
    mutationKey: ['otp'],
    mutationFn: async ({ pin }: OtpForm) => {
      return ky.post('otp', {
        body: toFormData({ pin }),
      }).json<ResOtp>()
    },
    onSuccess: (data) => {
      router.navigate({ to: redirect || '/members' });
      queryClient.setQueryData(['auth'], {
        status: data.status,
        user: data.user
      });
      sessionStorage.removeItem(EMAIL)
      sessionStorage.setItem(ACCESS_TOKEN, data.accessToken)
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN)
    },
  })
}
