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

interface LearningModalContentProps {
  romaji: string | string[]
  isAnswerCorrect: boolean | null
  currentAlphabet: AlphabetCategory
  practicedCardsIndices: number[]
  currentCardIndex: number
  learningCards: CharacterDetails[] | CharacterCard[]
  totalCards: number
  isFinished: boolean
  inputValue: string
  isSubmitDisabled: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  handleReset: (e: React.FormEvent) => void
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
  inputValue,
  isSubmitDisabled,
  handleInputChange,
  handleSubmit,
  handleReset
}: LearningModalContentProps) => {
  const t = useTranslations('ModalComponent.learning')
  const { hiragana, katakana } = getCharacterDetails(
    learningCards[currentCardIndex]
  )
  const effectiveCategory = getEffectiveCategory(
    learningCards[currentCardIndex],
    currentAlphabet
  )

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
      <form className='flex flex-col items-center gap-4 p-1'>
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
          placeholder={t('input.placeholder')}
          onChange={handleInputChange}
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
              {t('buttons.reset')}
            </Button>
            <DialogDescription className='text-xs'>
              {t('completion', {
                alphabet: currentAlphabet
              })}
            </DialogDescription>
          </div>
        ) : (
          <div className='flex flex-col items-center gap-1'>
            <Button
              variant='default'
              size='lg'
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className='select-none'
            >
              {t('buttons.submit')}
            </Button>
            <DialogDescription className='text-xs'>
              {t('input.description')}
            </DialogDescription>
          </div>
        )}
      </form>
    </>
  )
}
