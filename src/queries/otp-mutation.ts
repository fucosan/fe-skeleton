import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { ResOtp } from '@/types/response'
import { OTPSchema } from '@/schema/otp';
import { useAuthQuery } from './auth-query';

export function useOTPMutation() {
  const queryClient = useQueryClient()

  if (useAuthQuery().data?.status !== 'OTP_REQUIRED') {
    throw new Error('User is not signed in')
  }

  return useMutation({
    mutationKey: ['otp'],
    mutationFn: async ({ code }: OTPSchema) => {
      return ky.post('otp', {
        json: {
          code,
        },
      }).json<ResOtp>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], {
        status: data.status,
        user: data.user
      });
      sessionStorage.setItem(ACCESS_TOKEN, data.accessToken)
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN)
    },
  })
}
