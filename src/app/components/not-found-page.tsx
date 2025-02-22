import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <main className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted'>
      <div className='max-w-md text-center space-y-6 p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground/90 font-jp'>
          {t('message')}
        </h1>
        <h2 className='text-2xl font-semibold text-foreground/80'>
          {t('title')}
        </h2>
        <p className='text-muted-foreground text-lg'>
          {t('description')}{' '}
          <Link
            href='/'
            className='text-primary hover:text-primary/80 underline transition-colors'
          >
            {t('homeLink')}
          </Link>
        </p>
        <div className='mt-8 opacity-50'>
          <span className='text-6xl font-jp'>道</span>
        </div>
      </div>
    </main>
  )
}
