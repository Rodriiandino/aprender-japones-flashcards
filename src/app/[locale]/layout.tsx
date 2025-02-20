import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import {
  noto_sans_jp,
  kosugi_maru,
  mochiy_pop_one,
  shippori_mincho,
  yuji_syuku,
  zen_antique
} from './fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: 'Learn japanese',
  description:
    'Learn japanese with us, hiragana, katakana and kanji with flashcards!'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang='en'>
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
