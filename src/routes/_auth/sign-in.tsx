import { SignIn } from '@/components/sign-in/sign-in';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-[42px] gap-[36px]'>
      <SignIn />
    </div>
  );
}
