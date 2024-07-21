import { Progress } from '@/components/ui/progress'
import StatsLearning from './stats-learning'
import { useLearnStore } from '@/store/learn-store'

export default function LearningProgress() {
  const {
    isLearning,
    correctAnswers,
    totalCards,
    currentAlphabet,
    studyMode,
    practicedCardsIndices,
    correctPercentage
  } = useLearnStore()

  if (!isLearning) return null

  return (
    <div className='flex flex-col gap-1'>
      <h2 className='sm:text-xl text-lg font-bold'>Learning progress</h2>
      <p className='text-sm text-gray-500'>Stats for current session</p>
      <StatsLearning
        correctAnswers={correctAnswers}
        correctPercentage={correctPercentage}
        totalCards={totalCards}
        currentAlphabet={currentAlphabet}
        studyMode={studyMode}
      />
      <Progress value={practicedCardsIndices.length + 1} max={totalCards} />
    </div>
  )
}
