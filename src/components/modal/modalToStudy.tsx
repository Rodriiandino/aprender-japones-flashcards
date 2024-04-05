'use client'

import { useState } from 'react'
import { useModalStore, useLearnStore, useAlphabet } from '@/store/learn-store'
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
import CardToStudy from './cardToStudy'

export default function ModalToStudy() {
  const { isOpen, setIsOpen } = useModalStore()
  const { cards, cardsCorrect, cardsToLearn, setCardsCorrect } = useLearnStore()
  const { alphabet } = useAlphabet()
  const [currentCard, setCurrentCard] = useState(106)
  const [inputValue, setInputValue] = useState('')
  const [percentage, setPercentage] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleNextCard = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
    }
    if (inputValue === cards[currentCard].romaji) {
      setCardsCorrect(cardsCorrect + 1)
    }
    if (currentCard === cards.length - 1) {
      setFinished(true)
    }
    setPercentage(Math.round((cardsCorrect / cardsToLearn) * 100))
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
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>Learning {alphabet}</DialogTitle>
          <DialogDescription>
            {currentCard + 1} / {cards.length}
          </DialogDescription>
          <Progress value={currentCard + 1} max={cards.length} />
        </DialogHeader>
        <form className='flex flex-col items-center gap-4'>
          <CardToStudy primary={alphabet} character={cards[currentCard]} />
          <Input
            placeholder='Insert your answer'
            onChange={e => setInputValue(e.target.value)}
            className='sm:w-[200px]'
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
