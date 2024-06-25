import { StatItem } from '@/components/ui/stat-item'

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
  return (
    <>
      <StatItem label='Correct' value={`${correctAnswers}`} className='mt-2' />
      <StatItem label='Percentage correct' value={`${correctPercentage}%`} />
      <StatItem label='Learning' value={`${totalCards} cards`} />
      <StatItem label='Alphabet' value={currentAlphabet} />
      <StatItem label='Study method' value={studyMode} />
    </>
  )
}
