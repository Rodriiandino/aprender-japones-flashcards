'use client'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  useConfigLearnStore,
  useModalStore,
  useLearnStore
} from '@/store/learn-store'
import { generateRandomNumber } from '@/lib/utils'

export default function ConfirmModal() {
  const { selectedAlphabet, configCards, selectedStudyMode } =
    useConfigLearnStore()
  const { isConfirmModalOpen, toggleConfirmModal, toggleLearningModal } =
    useModalStore()
  const {
    setIsLearning,
    setLearningCards,
    setTotalCards,
    setCurrentAlphabet,
    setCorrectAnswers,
    setStudyMode,
    setCorrectPercentage,
    setPracticedCardsIndices,
    setCurrentCardIndex
  } = useLearnStore()

  const handleStartLearning = () => {
    setLearningCards(configCards)
    setTotalCards(configCards.length)
    setCurrentAlphabet(selectedAlphabet)
    setCorrectAnswers(0)
    setStudyMode(selectedStudyMode)
    setCorrectPercentage(0)
    toggleLearningModal(true)
    toggleConfirmModal(false)
    setPracticedCardsIndices([])
    setCurrentCardIndex(
      selectedStudyMode === 'random'
        ? generateRandomNumber(configCards.length)
        : 0
    )
    setIsLearning(true)
  }

  return (
    <Dialog open={isConfirmModalOpen} onOpenChange={toggleConfirmModal}>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>Confirm</DialogTitle>

          <DialogDescription>
            Are you sure you want to start learning?
          </DialogDescription>
        </DialogHeader>

        <p>
          You going to learn {configCards.length} characters from the{' '}
          {selectedAlphabet}
        </p>
        <p>You will learn in {selectedStudyMode} mode.</p>
        <DialogFooter className='gap-2 flex-col'>
          <Button size='lg' onClick={handleStartLearning}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
