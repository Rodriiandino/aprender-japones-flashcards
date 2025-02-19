import { Progress } from '@/components/ui/progress'
import StatsLearning from './stats-learning'
import { useLearnStore } from '@/store/learn-store'
import { BarChart } from 'lucide-react'

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
      <div className='flex items-center gap-2'>
        <BarChart className='w-4 h-4 text-muted-foreground' />
        <h2 className='sm:text-ls text-base font-bold'>Learning progress</h2>
      </div>
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
