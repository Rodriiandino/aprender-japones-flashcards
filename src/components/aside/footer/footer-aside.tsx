'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useModalStore, useLearnStore } from '@/store/learn-store'
import StatsLearning from './stats-learning'

export default function FooterAside() {
  const { setLearningModal, setConfirmModal } = useModalStore()
  const {
    setIsLearned,
    isLearned,
    setCardsCorrect,
    cardsCorrect,
    cardsLength,
    learningAlphabet,
    setCurrentCard,
    setPercentCorrect,
    howToStudy,
    setCardsAlreadyPracticed,
    cardsAlreadyPracticed,
    percentCorrect
  } = useLearnStore()

  const handleStartLearning = () => {
    if (!isLearned) {
      setConfirmModal(true)
      return
    }
    setLearningModal(true)
  }

  const resetProgress = () => {
    setIsLearned(false)
    setCardsCorrect(0)
    setCurrentCard(0)
    setPercentCorrect(0)
    setCardsAlreadyPracticed([])
  }

  return (
    <footer>
      {isLearned && (
        <div className='flex flex-col gap-1'>
          <h2 className='sm:text-xl text-lg font-bold'>Learning progress</h2>
          <p className='text-sm text-gray-500'>Start learning the alphabet</p>
          <StatsLearning
            cardsCorrect={cardsCorrect}
            percentCorrect={percentCorrect}
            cardsLength={cardsLength}
            learningAlphabet={learningAlphabet}
            howToStudy={howToStudy}
          />
          <Progress
            value={cardsAlreadyPracticed.length + 1}
            max={cardsLength}
          />
        </div>
      )}
      <div className='mt-2 flex gap-2 lg:flex-row flex-col'>
        <Button
          variant='default'
          className='w-full sm:h-16 h-10 sm:text-base'
          onClick={handleStartLearning}
        >
          {isLearned ? 'Continue learning' : 'Start learning'}
        </Button>

        {isLearned && (
          <Button
            variant='secondary'
            className='lg:w-2/5 w-full sm:h-16 h-10 sm:text-xs'
            onClick={resetProgress}
          >
            Cancel learning
          </Button>
        )}
      </div>
    </footer>
  )
}
