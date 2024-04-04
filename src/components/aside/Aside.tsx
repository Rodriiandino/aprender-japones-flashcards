import HeaderAside from './header-aside'
import { Separator } from '../ui/separator'
import Footer from './footer/footer-aside'

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

      <Footer />
    </aside>
  )
}
