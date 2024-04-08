'use client'
import { Button } from '@/components/ui/button'
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
    setCurrentCard
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
  }

  return (
    <footer>
      {isLearned && (
        <>
          <h2 className='text-2xl font-bold'>Learning progress</h2>
          <p className='text-sm text-gray-500'>Start learning the alphabet</p>
          <div className='flex justify-between mt-4'>
            <p className='text-sm text-gray-500'>Correct:</p>
            <p className='text-sm text-gray-500'>{cardsCorrect}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-500'>To learn:</p>
            <p className='text-sm text-gray-500'>{learningCardsToLearn}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm text-gray-500'>Alphabet:</p>
            <p className='text-sm text-gray-500'>{learningAlphabet}</p>
          </div>
        </>
      )}
      <div className='mt-2 flex gap-2'>
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
            className='w-2/6 h-16 sm:text-sm'
            onClick={resetProgress}
          >
            Reset progress
          </Button>
        )}
      </div>
    </footer>
  )
}
