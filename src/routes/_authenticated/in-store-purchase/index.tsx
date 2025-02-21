import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/in-store-purchase/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello /_authenticated/members/in-store-purchase/in-store-purchase!
    </div>
  )
}
