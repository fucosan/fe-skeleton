import { Button } from '@/components/ui/button/button';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      Hello from About!
      <Button
        onClick={() => alert('anjay')}>
        anjay</Button>
      <Button variant='outline'>anjay 2</Button>
      <Button className='bg-background' variant='outline'>anjay 3</Button>
    </div>
  );
}


