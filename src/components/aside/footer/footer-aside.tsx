'use client'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useModalStore, useLearnStore } from '@/store/learn-store'
import { useState } from 'react'

export default function Footer() {
  const { setLearningModal, setConfirmModal } = useModalStore()
  const {
    setIsLearned,
    isLearned,
    setCardsCorrect,
    cardsCorrect,
    learningCardsToLearn,
    learningAlphabet,
    setCurrentCard,
    currentCard,
    setPercentCorrect
  } = useLearnStore()
  const [configIsChanged, setConfigIsChanged] = useState(false)

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
  }

  return (
    <footer>
      {isLearned && (
        <div className='flex flex-col gap-1'>
          <h2 className='sm:text-xl text-lg font-bold'>Learning progress</h2>
          <p className='text-sm text-gray-500'>Start learning the alphabet</p>
          <div className='flex justify-between mt-2'>
            <p className='text-sm text-muted-foreground'>Correct:</p>
            <p className='text-sm text-muted-foreground'>{cardsCorrect}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-muted-foreground'>To learn:</p>
            <p className='text-sm text-muted-foreground'>
              {learningCardsToLearn} cards
            </p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-muted-foreground'>Alphabet:</p>
            <p className='text-sm text-muted-foreground'>{learningAlphabet}</p>
          </div>
          <Progress value={currentCard + 1} max={learningCardsToLearn} />
        </div>
      )}
      <div className='mt-2 flex gap-2 lg:flex-row flex-col'>
        <Button
          variant='default'
          className='w-full h-16 sm:text-base'
          onClick={handleStartLearning}
        >
          {isLearned ? 'Continue learning' : 'Start learning'}
        </Button>

        {isLearned && (
          <Button
            variant='secondary'
            className='lg:w-2/5 w-full h-16 sm:text-xs'
            onClick={resetProgress}
          >
            Cancel learning
          </Button>
        )}
      </div>
    </footer>
  )
}
