import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { RouterContext } from '@/lib/router'

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
      <ReactQueryDevtools />
    </>
  ),
  notFoundComponent: () => <div>Page not found</div>,
});
