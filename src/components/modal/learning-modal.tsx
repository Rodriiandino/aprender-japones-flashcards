'use client'

import { useEffect, useState } from 'react'
import {
  useModalStore,
  useLearnStore,
  useLearnHistoryStore
} from '@/store/learn-store'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Input } from '../ui/input'
import { Progress } from '@/components/ui/progress'
import { Button } from '../ui/button'
import LearningCard from './learning-card'
import {
  generateRandomNumber,
  generateRandomNumberExcluded,
  cn,
  getCharacterDetails,
  formatRomaji,
  formatDate
} from '@/lib/utils'
import { Card, CardContent, CardTitle } from '../ui/card'

export default function LearningModal() {
  const { isLearningModalOpen, toggleLearningModal } = useModalStore()
  const {
    learningCards,
    correctAnswers,
    setCorrectAnswers,
    totalCards,
    currentAlphabet,
    currentCardIndex,
    setCurrentCardIndex,
    correctPercentage,
    setCorrectPercentage,
    practicedCardsIndices,
    setPracticedCardsIndices,
    studyMode,
    isFinished,
    setIsFinished
  } = useLearnStore()
  const { addHistoryItem } = useLearnHistoryStore()
  const [inputValue, setInputValue] = useState('')
  const [isAnswerCorrect, setIsAnsweredCorrect] = useState<boolean | null>(null)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const { romaji } = getCharacterDetails(learningCards[currentCardIndex])

  const handleNextCard = async (e: React.FormEvent) => {
    e.preventDefault()

    const lowerCasedInput = inputValue.toLowerCase()

    const isMatch =
      lowerCasedInput === romaji ||
      (romaji.includes(lowerCasedInput) && lowerCasedInput.length > 0)

    if (isMatch) {
      setCorrectAnswers(correctAnswers + 1)
      setIsAnsweredCorrect(true)
    } else {
      setIsAnsweredCorrect(false)
    }

    setIsSubmitDisabled(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitDisabled(false)

    const updatedPracticedCardsIndices = [
      ...practicedCardsIndices,
      currentCardIndex
    ]

    if (updatedPracticedCardsIndices.length < totalCards) {
      setPracticedCardsIndices(updatedPracticedCardsIndices)
    }

    if (updatedPracticedCardsIndices.length < totalCards) {
      const nextIndex =
        studyMode === 'random'
          ? generateRandomNumberExcluded(
              totalCards,
              updatedPracticedCardsIndices
            )
          : currentCardIndex + 1

      setCurrentCardIndex(nextIndex)
      setIsAnsweredCorrect(null)
    } else {
      const history = {
        total: totalCards,
        studyMode: studyMode,
        correct: correctAnswers,
        alphabet: currentAlphabet,
        correctPercentage: correctPercentage,
        date: formatDate(new Date())
      }
      addHistoryItem({
        ...history
      })
      setIsFinished(true)
    }

    setInputValue('')
  }

  useEffect(() => {
    const percentage = Math.round((correctAnswers / totalCards) * 100)
    setCorrectPercentage(percentage)
  }, [correctAnswers, setCorrectPercentage, totalCards])

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    setCorrectAnswers(0)
    setCorrectPercentage(0)
    setPracticedCardsIndices([])
    setCurrentCardIndex(
      studyMode === 'random' ? generateRandomNumber(totalCards) : 0
    )
    setInputValue('')
    setIsAnsweredCorrect(null)
    setIsSubmitDisabled(false)
    setIsFinished(false)
  }

  useEffect(() => {
    setInputValue('')
    setIsAnsweredCorrect(null)
    setIsSubmitDisabled(false)
  }, [isFinished])

  return (
    <Dialog open={isLearningModalOpen} onOpenChange={toggleLearningModal}>
      <DialogContent
        className={cn('sm:max-w-[600px] w-5/6', {
          'border-2 border-red shadow-xl shadow-red': isAnswerCorrect === false,
          'border-2 border-green shadow-xl shadow-green': isAnswerCorrect
        })}
      >
        <DialogHeader>
          <DialogTitle>Learning {currentAlphabet}</DialogTitle>
          <DialogDescription>
            {practicedCardsIndices.length + 1} / {totalCards}
          </DialogDescription>
          <Progress value={practicedCardsIndices.length + 1} max={totalCards} />
        </DialogHeader>
        <form className='flex flex-col items-center gap-4 p-1'>
          {isAnswerCorrect !== null && (
            <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none shadow-none'>
              <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
                <CardTitle className='text-4xl sm:text-6xl'>
                  {formatRomaji(romaji)}
                </CardTitle>
              </CardContent>
            </Card>
          )}
          {isAnswerCorrect === null && (
            <LearningCard
              category={currentAlphabet}
              character={learningCards[currentCardIndex]}
            />
          )}
          <Input
            placeholder='Insert your answer'
            onChange={e => setInputValue(e.target.value)}
            className='sm:w-[200px]'
            value={inputValue}
          />
          {isFinished ? (
            <div className='flex flex-col items-center gap-1'>
              <Button
                variant='default'
                size='lg'
                onClick={handleReset}
                className='select-none'
              >
                Reset
              </Button>
              <DialogDescription className='text-xs'>
                You have finished learning {currentAlphabet}
              </DialogDescription>
            </div>
          ) : (
            <div className='flex flex-col items-center gap-1'>
              <Button
                variant='default'
                size='lg'
                onClick={handleNextCard}
                disabled={isSubmitDisabled}
                className='select-none'
              >
                Submit
              </Button>
              <DialogDescription className='text-xs'>
                Answer in romaji
              </DialogDescription>
            </div>
          )}
        </form>
        <DialogFooter className='sm:flex sm:flex-col flex-col gap-1 sm:space-x-0'>
          <div className='flex items-center gap-2'>
            <DialogDescription>Total questions: </DialogDescription>
            <strong>{totalCards}</strong>
          </div>
          <div className='flex items-center gap-2'>
            <DialogDescription>Correct answers: </DialogDescription>
            <strong>{correctAnswers}</strong>
          </div>

          <div className='flex items-center gap-2'>
            <DialogDescription>Percentage correct: </DialogDescription>
            <strong>{correctPercentage}%</strong>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
