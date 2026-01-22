import HeaderSelect from './header-select'
import { ModeToggle } from './mode-toggle'
import { Suspense } from 'react'
import { LanguageToggle } from './language-toggle'

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center gap-2'>
      <HeaderSelect />
      <Suspense fallback={<div className='h-14 w-14' />}>
        <LanguageToggle />
      </Suspense>
      <ModeToggle />
    </header>
  )
}
