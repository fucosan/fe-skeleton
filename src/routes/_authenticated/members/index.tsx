import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/members/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/members!</div>
}
