import '@/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'
import {
  noto_sans_jp,
  klee_one,
  zen_maru_gothic,
  shippori_mincho,
  yuji_syuku,
  yuji_mai,
  dot_gothic_16
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
      {/* <head>
        <script src='https://unpkg.com/react-scan/dist/auto.global.js' async />
      </head> */}
      <body
        className={`
        ${noto_sans_jp.variable}
        ${klee_one.variable}
        ${zen_maru_gothic.variable}
        ${shippori_mincho.variable}
        ${yuji_syuku.variable}
        ${yuji_mai.variable}
        ${dot_gothic_16.variable}

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
