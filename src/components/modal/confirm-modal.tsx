'use client'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel
} from '@/components/ui/alert-dialog'
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
    setCurrentCardIndex,
    isLearning,
    setIsFinished
  } = useLearnStore()

  const resetProgress = () => {
    setIsLearning(false)
    setTotalCards(0)
    setLearningCards([])
    setCorrectAnswers(0)
    setCurrentCardIndex(0)
    setCorrectPercentage(0)
    setPracticedCardsIndices([])
    setIsFinished(false)
  }

  const handleLearning = () => {
    if (isLearning) {
      resetProgress()
      return
    }

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
    setIsFinished(false)
    setIsLearning(true)
  }

  const learningDescription = isLearning
    ? `You are currently learning "${configCards.length}" characters from the "${selectedAlphabet}".`
    : `You are going to learn "${configCards.length}" characters from the "${selectedAlphabet}".`

  const leaningDescriptionPart2 = isLearning
    ? `You are learning in "${selectedStudyMode}" mode.`
    : `You will learn in "${selectedStudyMode}" mode.`

  const confirmMessage = isLearning
    ? 'Are you sure you want to finish learning?'
    : 'Are you sure you want to start learning?'

  const actionLabel = isLearning ? 'Finish learning' : 'Start learning'

  return (
    <AlertDialog open={isConfirmModalOpen} onOpenChange={toggleConfirmModal}>
      <AlertDialogContent className='w-5/6'>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogDescription>{confirmMessage}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className='text-center sm:text-left'>
          <p>{learningDescription}</p>
          <p className='mt-1'>{leaningDescriptionPart2}</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLearning}>
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
