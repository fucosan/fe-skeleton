import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ACCESS_TOKEN, EMAIL } from '@/lib/constants'
import { ky } from '@/lib/ky-with-auth'
import type { SignInForm } from '@/types/sign-in';
import type { ResSignIn } from '@/types/response'
import { router } from '@/lib/router';
import { toFormData } from '@/lib/utils';
import { getRouteApi } from '@tanstack/react-router';

const routeApi = getRouteApi('/_auth/sign-in');

export function useSignInMutation() {
  const queryClient = useQueryClient()
  const search = routeApi.useSearch();

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async (data: SignInForm) => {
      return ky.post('sign-in', {
        body: toFormData(data),
      }).json<ResSignIn>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['auth'], {
        status: data.status,
        user: null,
      });
      router.navigate({ to: '/otp', search });
      if (!data.user?.email) throw new Error('Email is required')
      sessionStorage.setItem(EMAIL, data.user.email)
    },
    onError: () => {
      sessionStorage.removeItem(ACCESS_TOKEN)
      sessionStorage.removeItem(EMAIL);
    },

  })
}
