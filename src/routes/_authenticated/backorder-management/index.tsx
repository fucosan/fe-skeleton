import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/backorder-management/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/backorder-management/!</div>
}
