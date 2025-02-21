import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/administrators/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/administrators/!</div>
}
