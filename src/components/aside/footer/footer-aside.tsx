import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  useModalStore,
  useLearnStore,
  useConfigLearnStore
} from '@/store/learn-store'
import { toast } from 'sonner'
import { useCallback } from 'react'

export default function FooterAside() {
  const t = useTranslations('AsideComponent.Footer')

  const { configCards } = useConfigLearnStore()
  const { toggleLearningModal, toggleConfirmModal } = useModalStore()
  const { isLearning } = useLearnStore()

  const handleStartLearning = useCallback(() => {
    if (configCards.length < 10) {
      toast.info(t('notEnoughCards.info'), {
        description: t('notEnoughCards.description'),
        action: { label: t('notEnoughCards.action'), onClick: () => {} }
      })
      return
    }

    if (!isLearning) {
      toggleConfirmModal(true)
      return
    }
    toggleLearningModal(true)
  }, [
    configCards.length,
    isLearning,
    t,
    toggleConfirmModal,
    toggleLearningModal
  ])

  const handleCancelLearning = () => {
    toggleConfirmModal(true)
  }

  return (
    <footer className='flex gap-2 lg:flex-row flex-col pr-2 pt-2'>
      <Button
        variant='default'
        className='w-full sm:h-16 h-10 sm:text-base'
        onClick={handleStartLearning}
      >
        {isLearning ? t('continueLearning') : t('startLearning')}
      </Button>

      {isLearning && (
        <Button
          variant='secondary'
          className='lg:w-2/5 w-full sm:h-16 h-10 sm:text-xs'
          onClick={handleCancelLearning}
        >
          {t('cancelLearning')}
        </Button>
      )}
    </footer>
  )
}
