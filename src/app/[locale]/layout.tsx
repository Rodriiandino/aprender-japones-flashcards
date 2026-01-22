import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import BaseLayout from '../components/base-layout'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  return <BaseLayout locale={locale}>{children}</BaseLayout>
}
