'use client'

import { useState, useRef } from 'react'
import {
  useModalStore,
  useLearnStore,
  useLearnHistoryStore,
  useAiHintStore
} from '@/store/learn-store'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  generateRandomNumber,
  generateRandomNumberExcluded,
  cn,
  getCharacterDetails,
  formatDate
} from '@/lib/utils'

import { LearningModalFooter } from './learning-modal-footer'
import { LearningModalContent } from './learning-modal-content'

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
  const inputRef = useRef<HTMLInputElement>(null)
  const [isAnswerCorrect, setIsAnsweredCorrect] = useState<boolean | null>(null)
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)
  const { setAiHint } = useAiHintStore()

  const { romaji } = getCharacterDetails(learningCards[currentCardIndex])

  const handleNextCard = async (e: React.FormEvent) => {
    e.preventDefault()
    const inputValue = inputRef.current?.value.toLowerCase().trim() || ''

    const isMatch =
      (typeof romaji === 'string' && romaji === inputValue) ||
      (Array.isArray(romaji) && romaji.includes(inputValue))

    let newCorrectAnswers = correctAnswers
    let newCorrectPercentage = correctPercentage

    if (isMatch) {
      newCorrectAnswers += 1
      setIsAnsweredCorrect(true)
    } else {
      setIsAnsweredCorrect(false)
    }

    newCorrectPercentage = Math.round((newCorrectAnswers / totalCards) * 100)

    setIsSubmitDisabled(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsSubmitDisabled(false)

    const updatedPracticedCardsIndices = [
      ...practicedCardsIndices,
      currentCardIndex
    ]

    if (updatedPracticedCardsIndices.length < totalCards) {
      setPracticedCardsIndices(updatedPracticedCardsIndices)

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
      setIsFinished(true)
      setIsAnsweredCorrect(null)
      setIsSubmitDisabled(false)

      const newHistory = {
        total: totalCards,
        studyMode: studyMode,
        correct: newCorrectAnswers,
        alphabet: currentAlphabet,
        correctPercentage: newCorrectPercentage,
        date: formatDate(new Date())
      }
      addHistoryItem(newHistory)
    }

    if (inputRef.current) {
      inputRef.current.value = ''
    }
    setCorrectAnswers(newCorrectAnswers)
    setCorrectPercentage(newCorrectPercentage)
    setAiHint('')
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()
    setCorrectAnswers(0)
    setCorrectPercentage(0)
    setPracticedCardsIndices([])
    setCurrentCardIndex(
      studyMode === 'random' ? generateRandomNumber(totalCards) : 0
    )
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    setIsAnsweredCorrect(null)
    setIsSubmitDisabled(false)
    setIsFinished(false)
    setAiHint('')
  }

  return (
    <Dialog open={isLearningModalOpen} onOpenChange={toggleLearningModal}>
      <DialogContent
        className={cn('sm:max-w-[600px] w-5/6', {
          'border-2 border-red shadow-xl shadow-red': isAnswerCorrect === false,
          'border-2 border-green shadow-xl shadow-green': isAnswerCorrect
        })}
      >
        <LearningModalContent
          romaji={romaji}
          isAnswerCorrect={isAnswerCorrect}
          currentAlphabet={currentAlphabet}
          practicedCardsIndices={practicedCardsIndices}
          currentCardIndex={currentCardIndex}
          learningCards={learningCards}
          totalCards={totalCards}
          isFinished={isFinished}
          inputRef={inputRef}
          isSubmitDisabled={isSubmitDisabled}
          handleSubmit={handleNextCard}
          handleReset={handleReset}
          correctAnswers={correctAnswers}
          correctPercentage={correctPercentage}
        />

        {!isFinished && (
          <LearningModalFooter
            totalCards={totalCards}
            correctAnswers={correctAnswers}
            correctPercentage={correctPercentage}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
