import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/store-management/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/store-management/!</div>
}
