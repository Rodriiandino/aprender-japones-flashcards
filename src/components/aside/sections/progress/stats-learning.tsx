import { StatItem } from '@/components/ui/stat-item'
import { useTranslations } from 'next-intl'

interface StatsLearningProps {
  correctAnswers: number
  correctPercentage: number
  totalCards: number
  currentAlphabet: string
  studyMode: string
}

export default function StatsLearning({
  correctAnswers,
  correctPercentage,
  totalCards,
  currentAlphabet,
  studyMode
}: StatsLearningProps) {
  const t = useTranslations('AsideComponent.LearningProgress.stats')

  return (
    <>
      <StatItem
        label={t('correct')}
        value={`${correctAnswers}`}
        className='mt-2'
      />
      <StatItem
        label={t('percentageCorrect')}
        value={`${correctPercentage}%`}
      />
      <StatItem label={t('learning')} value={`${totalCards} cards`} />
      <StatItem label={t('alphabet')} value={currentAlphabet} />
      <StatItem label={t('method')} value={studyMode} />
    </>
  )
}
