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

export const metadata: Metadata = {
  title: 'Learn japanese',
  description:
    'Learn japanese with us, hiragana, katakana and kanji with flashcards!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
