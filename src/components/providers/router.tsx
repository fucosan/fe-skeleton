import { useAuth } from '@/hooks/use-auth';
import { router } from '@/lib/router';
import { RouterProvider } from '@tanstack/react-router'

export function RouterProviderWithContext() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}
