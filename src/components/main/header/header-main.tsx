import HeaderSelect from './header-select'
import { ModeToggle } from './mode-toggle'
import { LanguageToggle } from './language-toggle'

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center gap-2'>
      <HeaderSelect />
      <LanguageToggle />
      <ModeToggle />
    </header>
  )
}
