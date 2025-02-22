import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { SignInFormSchema } from '@/schema/sign-in';
import type { ResSignIn } from '@/types/response'
import { router } from '@/lib/router';

export function useSignInMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async ({ email, password }: SignInFormSchema) => {
      return ky.post('sign-in', {
        json: {
          email,
          password
        },
      }).json<ResSignIn>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], {
        status: data.status,
        data: null,
      });
      router.navigate({ to: '/otp' });
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN)
    },
  })
}
