import { SignIn } from '@/components/sign-in/sign-in';
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
import { fallback, zodValidator } from '@tanstack/zod-adapter';

const signInSearchSchema = z.object({
  redirect: fallback(z.string(), '').optional()
});

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
  validateSearch: zodValidator(signInSearchSchema)
})

function RouteComponent() {

  return (
    <div className='p-[42px] gap-[36px]'>
      <SignIn />
    </div>
  );
}
