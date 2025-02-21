import { useTranslations } from 'next-intl'

export default function NoCardsAvailable() {
  const t = useTranslations('MainComponent.noCards')

  return (
    <section className='w-full h-full flex justify-center items-center'>
      <p className='text-xl sm:text-2xl text-center text-gray-500'>
        {t('message')}
      </p>
    </section>
  )
}
