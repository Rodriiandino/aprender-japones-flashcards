import { routing } from '@/i18n/routing'
import BaseLayout from './components/base-layout'
import NotFoundPage from './components/not-found-page'
import { setRequestLocale } from 'next-intl/server'

export default function GlobalNotFound() {
  setRequestLocale(routing.defaultLocale)

  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  )
}
