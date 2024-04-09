import HeaderAside from './header-aside'
import { Separator } from '../ui/separator'
import Footer from './footer/footer-aside'
import StudyPreparation from './study-preparation'

export default function Aside() {
  return (
    <aside className='w-full h-full flex flex-col gap-4'>
      <HeaderAside />

      <StudyPreparation />
      <Separator />

      <section className='h-full flex justify-center items-center select-none opacity-60'>
        Custom
      </section>
      <Separator />

      <section className='h-full flex justify-center items-center select-none opacity-60'>
        Last try
      </section>
      <Separator />

      <Footer />
    </aside>
  )
}
