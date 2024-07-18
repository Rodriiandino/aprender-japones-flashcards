import { DialogDescription, DialogFooter } from '@/components/ui/dialog'

interface LearningModalFooterProps {
  totalCards: number
  correctAnswers: number
  correctPercentage: number
}

export const LearningModalFooter = ({
  totalCards,
  correctAnswers,
  correctPercentage
}: LearningModalFooterProps) => (
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
)
