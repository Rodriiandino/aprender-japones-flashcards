import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import LearningCard from './learning-card'
import { LeaningResultCard } from './learning-result-card'
import { Input } from '@/components/ui/input'
import { AlphabetCategory } from '@/types/alphabet-type'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { getCharacterDetails, getEffectiveCategory } from '@/lib/utils'
import LearningModalAiHint from './learning-modal-aiHint'
import { LearningResults } from './learning-results'
import { RefObject } from 'react'

interface LearningModalContentProps {
  romaji: string | string[]
  isAnswerCorrect: boolean | null
  currentAlphabet: AlphabetCategory
  practicedCardsIndices: number[]
  currentCardIndex: number
  learningCards: CharacterDetails[] | CharacterCard[]
  totalCards: number
  isFinished: boolean
  inputRef: RefObject<HTMLInputElement>
  isSubmitDisabled: boolean
  handleSubmit: (e: React.FormEvent) => void
  handleReset: (e: React.FormEvent) => void
  correctAnswers: number
  correctPercentage: number
}

export const LearningModalContent = ({
  romaji,
  isAnswerCorrect,
  currentAlphabet,
  practicedCardsIndices,
  currentCardIndex,
  learningCards,
  totalCards,
  isFinished,
  inputRef,
  isSubmitDisabled,
  handleSubmit,
  handleReset,
  correctAnswers,
  correctPercentage
}: LearningModalContentProps) => {
  const t = useTranslations('ModalComponent.learning')
  const { hiragana, katakana } = getCharacterDetails(
    learningCards[currentCardIndex]
  )
  const effectiveCategory = getEffectiveCategory(
    learningCards[currentCardIndex],
    currentAlphabet
  )

  if (isFinished) {
    return (
      <LearningResults
        correctAnswers={correctAnswers}
        totalCards={totalCards}
        correctPercentage={correctPercentage}
        currentAlphabet={currentAlphabet}
        handleReset={handleReset}
      />
    )
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {t('title', {
            alphabet: currentAlphabet
          })}
        </DialogTitle>
        <DialogDescription>
          {practicedCardsIndices.length + 1} / {totalCards}
        </DialogDescription>
        <Progress value={practicedCardsIndices.length + 1} max={totalCards} />
        <LearningModalAiHint
          isFinished={isFinished}
          effectiveCategory={effectiveCategory}
          hiragana={hiragana}
          katakana={katakana}
        />
      </DialogHeader>
      <form
        className='flex flex-col items-center gap-4 p-1'
        onSubmit={handleSubmit}
      >
        {isAnswerCorrect !== null ? (
          <LeaningResultCard romaji={romaji} />
        ) : (
          <LearningCard
            effectiveCategory={effectiveCategory}
            hiragana={hiragana}
            katakana={katakana}
          />
        )}
        <Input
          ref={inputRef}
          placeholder={t('input.placeholder')}
          className='sm:w-[200px]'
        />
        <div className='flex flex-col items-center gap-1'>
          <Button
            type='submit'
            variant='default'
            size='lg'
            disabled={isSubmitDisabled}
            className='select-none'
          >
            {t('buttons.submit')}
          </Button>
          <DialogDescription className='text-xs'>
            {t('input.description')}
          </DialogDescription>
        </div>
      </form>
    </>
  )
}
