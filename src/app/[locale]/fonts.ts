import {
  Noto_Sans_JP,
  Kosugi_Maru,
  Zen_Antique,
  Yuji_Syuku,
  Mochiy_Pop_One,
  Shippori_Mincho
} from 'next/font/google'

export const noto_sans_jp = Noto_Sans_JP({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp'
})

export const kosugi_maru = Kosugi_Maru({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kosugi-maru'
})

export const zen_antique = Zen_Antique({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-antique'
})

export const yuji_syuku = Yuji_Syuku({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yuji-syuku'
})

export const mochiy_pop_one = Mochiy_Pop_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mochiy-pop-one'
})

export const shippori_mincho = Shippori_Mincho({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-shippori-mincho'
})
