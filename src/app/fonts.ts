import {
  Noto_Sans_JP,
  M_PLUS_Rounded_1c,
  Zen_Kaku_Gothic_New,
  Klee_One,
  Zen_Maru_Gothic,
  BIZ_UDGothic,
  Kaisei_Decol,
  Shippori_Mincho,
  Yuji_Syuku
} from 'next/font/google'

export const noto_sans_jp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  preload: true
})

export const mplus_rounded = M_PLUS_Rounded_1c({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mplus-rounded'
})

export const zen_kaku_gothic = Zen_Kaku_Gothic_New({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-kaku-gothic'
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

export const biz_udgothic = BIZ_UDGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-biz-udgothic'
})

export const kaisei_decol = Kaisei_Decol({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kaisei-decol'
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
