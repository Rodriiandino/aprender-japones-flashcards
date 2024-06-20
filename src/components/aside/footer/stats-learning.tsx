import { StatItem } from '@/components/ui/stat-item'

interface StatsLearningProps {
  cardsCorrect: number
  percentCorrect: number
  cardsLength: number
  learningAlphabet: string
  howToStudy: string
}

export default function StatsLearning({
  cardsCorrect,
  percentCorrect,
  cardsLength,
  learningAlphabet,
  howToStudy
}: StatsLearningProps) {
  return (
    <>
      <StatItem label='Correct' value={`${cardsCorrect}`} className='mt-2' />
      <StatItem label='Percentage correct' value={`${percentCorrect}%`} />
      <StatItem label='Learning' value={`${cardsLength} cards`} />
      <StatItem label='Alphabet' value={learningAlphabet} />
      <StatItem label='Study method' value={howToStudy} />
    </>
  )
}
