'use client'

import HeaderAside from './header/header-aside'
import FooterAside from './footer/footer-aside'
import { Button } from '../ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState, useId } from 'react'
import SectionsAside from './sections/sections-aside'

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
        <div className='bg-background sm:w-full h-full p-3 pr-1 border-r w-60 relative flex flex-col gap-4 z-50'>
          <Button
            size={'sm'}
            className='absolute p-0 -right-5 w-5 h-full top-0 rounded-r-full sm:hidden'
            onClick={handleToggleAside}
            variant={'outline'}
          >
            {isAsideOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Button>

          <div className='flex flex-col h-full'>
            <HeaderAside />
            <SectionsAside />
            <FooterAside />
          </div>
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
