import { OtpVerification } from '@/components/otp-verification/otp-verification'
import { EMAIL } from '@/lib/constants';
import { hasData } from '@/lib/utils';
import { createFileRoute } from '@tanstack/react-router'
import { signInFormSchema } from '@/types/sign-in';
import OtpError from '@/components/otp-verification/otp-error';

export const Route = createFileRoute('/_auth/otp')({
  component: RouteComponent,
  errorComponent: OtpError
})

const emailSchema = signInFormSchema.pick({ email: true });

function RouteComponent() {
  const email = sessionStorage.getItem(EMAIL) || '';
  const parsedEmail = emailSchema.safeParse({ email });

  if (!hasData(email) || !parsedEmail.success) {
    return <OtpError />
  }

  return <OtpVerification email={email} />
}
