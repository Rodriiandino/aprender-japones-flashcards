'use client'

import HeaderAside from './header-aside'
import { Separator } from '../ui/separator'
import Footer from './footer/footer-aside'
import StudyPreparation from './study-preparation'
import TooltipCustom from '../tooltip-custom'
import { Button } from '../ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState, useId } from 'react'

export default function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const asideId = useId()
  const backgroundId = useId()

  const handleToggleAside = () => {
    const aside = document.getElementById(asideId)
    const background = document.getElementById(backgroundId)
    background?.classList.toggle('hidden')
    aside?.classList.toggle('-translate-x-60')
    setIsAsideOpen(!isAsideOpen)
  }

  return (
    <>
      <aside
        className='sm:relative absolute top-0 left-0 h-full flex flex-row sm:gap-0 gap-4 w-64 lg:w-96 lg:min-w-80 sm:w-80 sm:min-w-52 z-50 -translate-x-60 sm:-translate-x-0 transition-transform'
        id={asideId}
      >
        <div className='bg-background sm:w-full h-full p-3 border-r w-60 relative flex flex-col gap-4 z-50'>
          <Button
            size={'sm'}
            className='absolute p-0 -right-5 w-5 h-full top-0 rounded-r-full sm:hidden'
            onClick={handleToggleAside}
            variant={'outline'}
          >
            {isAsideOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>
          <HeaderAside />

          <StudyPreparation />
          <Separator />

          <TooltipCustom text='Feature in development'>
            <section className='h-full flex justify-center items-center select-none opacity-60'>
              Custom
            </section>
          </TooltipCustom>

          <Separator />
          <TooltipCustom text='Feature in development'>
            <section className='h-full flex justify-center items-center select-none opacity-60'>
              Last try
            </section>
          </TooltipCustom>
          <Separator />

          <Footer />
        </div>
      </aside>

      <div
        className='w-full h-full bg-black/80 cursor-pointer sm:hidden hidden fixed top-0 left-0 z-40 animate-blurred-fade-in duration-150'
        onClick={handleToggleAside}
        id={backgroundId}
      ></div>
    </>
  )
}
