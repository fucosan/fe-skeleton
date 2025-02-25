import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN, EMAIL } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { ResOtp } from '@/types/response'
import { useAuthQuery } from './auth-query';
import { OtpForm } from '@/types/otp';

export function useOTPMutation() {
  const queryClient = useQueryClient()

  if (useAuthQuery().data?.status !== 'OTP_REQUIRED') {
    //throw new Error('User is not signed in')
  }

  return useMutation({
    mutationKey: ['otp'],
    mutationFn: async ({ pin }: OtpForm) => {
      return ky.post('otp', {
        json: {
          pin,
        },
      }).json<ResOtp>()
    },
    onSuccess: (data) => {
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
