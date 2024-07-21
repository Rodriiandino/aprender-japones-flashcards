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
}: LearningModalContentProps) => (
  <>
    <DialogHeader>
      <DialogTitle>Learning {currentAlphabet}</DialogTitle>
      <DialogDescription>
        {practicedCardsIndices.length + 1} / {totalCards}
      </DialogDescription>
      <Progress value={practicedCardsIndices.length + 1} max={totalCards} />
    </DialogHeader>
    <form className='flex flex-col items-center gap-4 p-1'>
      {isAnswerCorrect !== null ? (
        <LeaningResultCard romaji={romaji} />
      ) : (
        <LearningCard
          category={currentAlphabet}
          character={learningCards[currentCardIndex]}
        />
      )}
      <Input
        placeholder='Insert your answer'
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
            onClick={handleSubmit}
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
  </>
)
