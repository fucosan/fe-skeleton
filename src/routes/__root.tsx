import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Sidebar } from '@/components/sidebar/sidebar';
import { Header } from '@/components/header/header';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <div className='w-[1280px] flex flex-col gap-[6px] border border-red-500'>
      <Header />
      <div className='flex flex-row space-x-[6px]'>
        <>
          <Sidebar />
        </>
        <div className='bg-background ml-1'>
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </div>
  ),
  notFoundComponent: () => <div>Page not found</div>,
});
