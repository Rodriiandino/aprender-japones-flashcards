import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import BaseLayout from '../components/base-layout'
import { ReactNode } from 'react'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)

  return <BaseLayout locale={locale}>{children}</BaseLayout>
}

