import {
  Noto_Sans_JP,
  Klee_One,
  Zen_Maru_Gothic,
  Shippori_Mincho,
  Yuji_Syuku,
  Yuji_Mai,
  DotGothic16
} from 'next/font/google'

export const noto_sans_jp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: true
})

export const klee_one = Klee_One({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-klee-one'
})

export const zen_maru_gothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-maru-gothic'
})

export const shippori_mincho = Shippori_Mincho({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shippori-mincho'
})

export const yuji_syuku = Yuji_Syuku({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yuji-syuku'
})

export const yuji_mai = Yuji_Mai({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yuji-mai'
})

export const dot_gothic_16 = DotGothic16({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dot-gothic-16'
})
