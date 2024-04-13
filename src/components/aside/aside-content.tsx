'use client'

import HeaderAside from './header-aside'
import { Separator } from '../ui/separator'
import Footer from './footer/footer-aside'
import StudyPreparation from './study-preparation'
import TooltipCustom from '../tooltip-custom'
import { Button } from '../ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'

export default function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const handleToggleAside = () => {
    const aside = document.querySelector('aside')
    aside?.classList.toggle('-translate-x-60')
    setIsAsideOpen(!isAsideOpen)
  }

  return (
    <aside className='sm:relative fixed h-full flex flex-col gap-4 border-r p-3 w-60 lg:w-96 lg:min-w-80 sm:w-80 sm:min-w-52 z-50 bg-background -translate-x-60 sm:-translate-x-0 transition-transform'>
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
    </aside>
  )
}
