import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] })

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
      <body className={noto_sans_jp.className}>
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
