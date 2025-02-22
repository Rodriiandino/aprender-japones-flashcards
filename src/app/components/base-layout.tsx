import '@/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'
import {
  noto_sans_jp,
  kosugi_maru,
  mochiy_pop_one,
  shippori_mincho,
  yuji_syuku,
  zen_antique
} from '../fonts'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

type Props = {
  children: ReactNode
  locale: string
}

export const metadata: Metadata = {
  title: 'Learn japanese',
  description:
    'Learn japanese with us, hiragana, katakana and kanji with flashcards!'
}

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages()

  return (
    <html className='h-full' lang={locale}>
      <body
        className={`
        ${noto_sans_jp.variable}
        ${kosugi_maru.variable}
        ${zen_antique.variable}
        ${yuji_syuku.variable}
        ${mochiy_pop_one.variable}
        ${shippori_mincho.variable}

        font-noto
        `}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
