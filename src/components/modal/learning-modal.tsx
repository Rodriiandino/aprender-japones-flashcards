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

export default function LearningModal() {
  const { learningModal: isOpen, setLearningModal: setIsOpen } = useModalStore()
  const {
    learningCards: cards,
    cardsCorrect,
    learningCardsToLearn: cardsToLearn,
    setCardsCorrect,
    learningAlphabet: alphabet,
    currentCard,
    setCurrentCard,
    percentCorrect: percentage,
    setPercentCorrect: setPercentage
  } = useLearnStore()
  const [inputValue, setInputValue] = useState('')
  const [finished, setFinished] = useState(false)

  const handleNextCard = (e: React.FormEvent) => {
    e.preventDefault()

    const lowerCasedInput = inputValue.toLowerCase()
    const isMatch =
      lowerCasedInput === cards[currentCard].romaji ||
      (cards[currentCard].romaji.includes(lowerCasedInput) &&
        lowerCasedInput.length > 0)

    if (currentCard < cardsToLearn - 1) {
      setCurrentCard(currentCard + 1)
    }
    if (isMatch) {
      setCardsCorrect(cardsCorrect + 1)
      setInputValue('')
    }
    if (currentCard === cardsToLearn - 1) {
      setFinished(true)
    }

    const percentage = Math.round((cardsCorrect / cardsToLearn) * 100)
    setPercentage(percentage)
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentCard(0)
    setCardsCorrect(0)
    setFinished(false)
    setPercentage(0)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-[600px] w-5/6'>
        <DialogHeader>
          <DialogTitle>Learning {alphabet}</DialogTitle>
          <DialogDescription>
            {currentCard + 1} / {cardsToLearn}
          </DialogDescription>
          <Progress value={currentCard + 1} max={cardsToLearn} />
        </DialogHeader>
        <form className='flex flex-col items-center gap-4'>
          <LearningCard primary={alphabet} character={cards[currentCard]} />
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
              <Button variant='default' size='lg' onClick={handleNextCard}>
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
            <strong>{cardsToLearn}</strong>
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
