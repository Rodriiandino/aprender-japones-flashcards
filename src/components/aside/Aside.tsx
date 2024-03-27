import { Button } from '../ui/button'
import HeaderAside from './HeaderAside'
import { Separator } from '../ui/separator'

export default function Aside() {
  return (
    <aside className='w-full h-full flex flex-col gap-2'>
      <HeaderAside />

      <section className='h-full'>Config</section>
      <Separator />

      <section className='h-full'>Custom</section>
      <Separator />

      <section className='h-full'>Last try</section>
      <Separator />

      <footer>
        <Button variant='default' className='w-full h-16 sm:text-base'>
          Estudiar
        </Button>
      </footer>
    </aside>
  )
}
