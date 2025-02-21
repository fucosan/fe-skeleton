import { LoginForm } from '@/components/login-form/login-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-[42px] gap-[36px]'>
      <LoginForm />
    </div>
  );
}
