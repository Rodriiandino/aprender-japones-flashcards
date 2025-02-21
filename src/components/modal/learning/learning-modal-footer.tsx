import { useTranslations } from 'next-intl'
import { DialogDescription, DialogFooter } from '@/components/ui/dialog'

interface LearningModalFooterProps {
  totalCards: number
  correctAnswers: number
  correctPercentage: number
}

export const LearningModalFooter = ({
  totalCards,
  correctAnswers,
  correctPercentage
}: LearningModalFooterProps) => {
  const t = useTranslations('ModalComponent.learning.stats')

  return (
    <DialogFooter className='sm:flex sm:flex-col flex-col gap-1 sm:space-x-0'>
      <div className='flex items-center gap-2'>
        <DialogDescription>{t('total')}</DialogDescription>
        <strong>{totalCards}</strong>
      </div>
      <div className='flex items-center gap-2'>
        <DialogDescription>{t('correct')}</DialogDescription>
        <strong>{correctAnswers}</strong>
      </div>
      <div className='flex items-center gap-2'>
        <DialogDescription>{t('percentage')}</DialogDescription>
        <strong>{correctPercentage}%</strong>
      </div>
    </DialogFooter>
  )
}
