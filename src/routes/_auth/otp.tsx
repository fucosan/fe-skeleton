import { OtpVerification } from '@/components/otp-verification/otp-verification'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/otp')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OtpVerification />
}
