import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import BaseLayout from '../components/base-layout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  return <BaseLayout locale={locale}>{children}</BaseLayout>
}
