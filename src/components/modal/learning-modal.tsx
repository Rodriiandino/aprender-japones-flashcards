'use client'

import { useState } from 'react'
import { useModalStore, useLearnStore } from '@/store/learn-store'
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
  cn
} from '@/lib/utils'
import { Card, CardContent, CardTitle } from '../ui/card'

export default function LearningModal() {
  const { learningModal: isOpen, setLearningModal: setIsOpen } = useModalStore()
  const {
    learningCards: cards,
    cardsCorrect,
    setCardsCorrect,
    cardsLength,
    learningAlphabet: alphabet,
    currentCard,
    setCurrentCard,
    percentCorrect: percentage,
    setPercentCorrect: setPercentage,
    cardsAlreadyPracticed,
    setCardsAlreadyPracticed,
    howToStudy: learningMode
  } = useLearnStore()
  const [inputValue, setInputValue] = useState('')
  const [finished, setFinished] = useState(false)
  const [isAnswerCorrect, setIsAnsweredCorrect] = useState<boolean | null>(null)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const handleNextCard = async (e: React.FormEvent) => {
    e.preventDefault()

    const lowerCasedInput = inputValue.toLowerCase()
    const isMatch =
      lowerCasedInput === cards[currentCard].romaji ||
      (cards[currentCard].romaji.includes(lowerCasedInput) &&
        lowerCasedInput.length > 0)

    if (isMatch) {
      setCardsCorrect(cardsCorrect + 1)
      setIsAnsweredCorrect(true)
    } else {
      setIsAnsweredCorrect(false)
    }

    setIsSubmitDisabled(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitDisabled(false)

    if (cardsAlreadyPracticed.length < cardsLength - 1) {
      setCardsAlreadyPracticed([...cardsAlreadyPracticed, currentCard])
      setCurrentCard(
        learningMode === 'random'
          ? generateRandomNumberExcluded(cardsLength, cardsAlreadyPracticed)
          : currentCard + 1
      )
      setIsAnsweredCorrect(null)
    }

    if (cardsAlreadyPracticed.length === cardsLength - 1) {
      setFinished(true)
    }

    const percentage = Math.round((cardsCorrect / cardsLength) * 100)
    setPercentage(percentage)
    setInputValue('')
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    setCardsCorrect(0)
    setPercentage(0)
    setCardsAlreadyPracticed([])
    setCurrentCard(
      learningMode === 'random' ? generateRandomNumber(cardsLength) : 0
    )
    setInputValue('')
    setIsAnsweredCorrect(null)
    setIsSubmitDisabled(false)
    setFinished(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className={cn('sm:max-w-[600px] w-5/6', {
          'border-2 border-red-950 shadow-xl shadow-red-950':
            isAnswerCorrect === false,
          'border-2 border-green-950 shadow-xl shadow-green-950':
            isAnswerCorrect
        })}
      >
        <DialogHeader>
          <DialogTitle>Learning {alphabet}</DialogTitle>
          <DialogDescription>
            {cardsAlreadyPracticed.length + 1} / {cardsLength}
          </DialogDescription>
          <Progress
            value={cardsAlreadyPracticed.length + 1}
            max={cardsLength}
          />
        </DialogHeader>
        <form className='flex flex-col items-center gap-4 p-1'>
          {isAnswerCorrect === true || isAnswerCorrect === false ? (
            <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none'>
              <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
                <CardTitle className='text-4xl sm:text-6xl'>
                  {typeof cards[currentCard].romaji === 'string'
                    ? cards[currentCard].romaji
                    : (cards[currentCard].romaji as string[]).join(', ')}
                </CardTitle>
              </CardContent>
            </Card>
          ) : (
            <LearningCard primary={alphabet} character={cards[currentCard]} />
          )}

          <Input
            placeholder='Insert your answer'
            onChange={e => setInputValue(e.target.value)}
            className='sm:w-[200px]'
            value={inputValue}
          />
          {finished ? (
            <div className='flex flex-col items-center gap-1'>
              <Button variant='default' size='lg' onClick={handleReset}>
                Reset
              </Button>
              <DialogDescription className='text-xs'>
                You have finished learning {alphabet}
              </DialogDescription>
            </div>
          ) : (
            <div className='flex flex-col items-center gap-1'>
              <Button
                variant='default'
                size='lg'
                onClick={handleNextCard}
                disabled={isSubmitDisabled}
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
            <strong>{cardsLength}</strong>
          </div>
          <div className='flex items-center gap-2'>
            <DialogDescription>Correct answers: </DialogDescription>
            <strong>{cardsCorrect}</strong>
          </div>

          <div className='flex items-center gap-2'>
            <DialogDescription>Percentage correct: </DialogDescription>
            <strong>{percentage}%</strong>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
