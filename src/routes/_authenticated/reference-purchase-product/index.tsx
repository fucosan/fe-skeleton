import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/reference-purchase-product/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello /_authenticated/reference-purchase-product/!</div>
}
