import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/brand-management/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/brand-management/!</div>
}
