'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  useModalStore,
  useLearnStore,
  useConfigLearnStore
} from '@/store/learn-store'
import StatsLearning from './stats-learning'
import { toast } from 'sonner'

export default function FooterAside() {
  const { configCards } = useConfigLearnStore()
  const { toggleLearningModal, toggleConfirmModal } = useModalStore()
  const {
    isLearning,
    correctAnswers,
    totalCards,
    currentAlphabet,
    studyMode,
    practicedCardsIndices,
    correctPercentage
  } = useLearnStore()

  const handleStartLearning = () => {
    if (configCards.length < 10) {
      toast.info('Not enough cards to start learning', {
        description: 'Minimum of 10 cards required',
        action: { label: 'undo', onClick: () => {} }
      })
      return
    }

    if (!isLearning) {
      toggleConfirmModal(true)
      return
    }
    toggleLearningModal(true)
  }

  const handleCancelLearning = () => {
    toggleConfirmModal(true)
  }

  return (
    <footer>
      {isLearning && (
        <div className='flex flex-col gap-1'>
          <h2 className='sm:text-xl text-lg font-bold'>Learning progress</h2>
          <p className='text-sm text-gray-500'>Start learning the alphabet</p>
          <StatsLearning
            correctAnswers={correctAnswers}
            correctPercentage={correctPercentage}
            totalCards={totalCards}
            currentAlphabet={currentAlphabet}
            studyMode={studyMode}
          />
          <Progress value={practicedCardsIndices.length + 1} max={totalCards} />
        </div>
      )}
      <div className='mt-2 flex gap-2 lg:flex-row flex-col'>
        <Button
          variant='default'
          className='w-full sm:h-16 h-10 sm:text-base'
          onClick={handleStartLearning}
        >
          {isLearning ? 'Continue learning' : 'Start learning'}
        </Button>

        {isLearning && (
          <Button
            variant='secondary'
            className='lg:w-2/5 w-full sm:h-16 h-10 sm:text-xs'
            onClick={handleCancelLearning}
          >
            Cancel learning
          </Button>
        )}
      </div>
    </footer>
  )
}
