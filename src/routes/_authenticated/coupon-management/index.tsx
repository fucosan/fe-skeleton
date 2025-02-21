import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/coupon-management/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/coupon-management/!</div>
}
