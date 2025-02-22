import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { SignInFormSchema } from '@/schema/sign-in';
import type { ResSignIn } from '@/types/response'

export function useSignInMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async ({ email, password }: SignInFormSchema) => {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)

      return ky
        .post('sign-in', {
          json: {
            email,
            password
          }
        })
        .json<ResSignIn>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], { user: data.user })
      sessionStorage.setItem(ACCESS_TOKEN, data.accessToken)
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN)
    },
  })
}
