import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Sidebar } from '@/components/sidebar/sidebar';
import { Header } from '@/components/header/header';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context, location }) => {
    let shouldRedirect = false

    if (context.auth.status === 'PENDING') {
      try {
        await context.auth.ensureData()
      }
      catch {
        // shouldRedirect = true
        shouldRedirect = false
      }
    }

    if (context.auth.status === 'UNAUTHENTICATED') {
      // shouldRedirect = true
      shouldRedirect = false
    }

    if (shouldRedirect) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  return (
    <div className='w-[1280px] flex flex-col gap-[6px]'>
      <Header />
      <div className='flex flex-row space-x-[6px]'>
        <>
          <Sidebar />
        </>
        <div className='bg-background ml-1 w-[1118px] rounded-[5px] py-[24px] px-[16px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
