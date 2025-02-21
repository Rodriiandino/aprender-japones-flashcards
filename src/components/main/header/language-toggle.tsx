'use client'
import * as React from 'react'
import { GlobeIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useRouter, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function LanguageToggle() {
  const t = useTranslations('HeaderComponent.languageToggle')
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: string) => {
    router.replace(pathname, { locale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='h-14 w-14'>
          <GlobeIcon className='h-[1.2rem] w-[1.2rem]' />
          <span className='sr-only'>{t('sr')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => switchLanguage('en')}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('es')}>
          ES
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
