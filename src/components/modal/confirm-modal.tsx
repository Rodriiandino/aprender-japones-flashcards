'use client'
import { useTranslations } from 'next-intl'
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
  useLearnStore,
  useAiHintStore
} from '@/store/learn-store'
import { generateRandomNumber } from '@/lib/utils'

export default function ConfirmModal() {
  const t = useTranslations('ModalComponent.confirm')
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
    setIsFinished,
    studyMode,
    totalCards,
    currentAlphabet
  } = useLearnStore()
  const { setAiHint } = useAiHintStore()

  const resetProgress = () => {
    setAiHint('')
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
    ? t('learningDescription.message', {
        totalCards,
        currentAlphabet
      })
    : t('learningDescriptionPart2.message', {
        configCardsLength: configCards.length,
        selectedAlphabet
      })

  const leaningDescriptionPart2 = isLearning
    ? t('learningDescription.part2', {
        studyMode
      })
    : t('learningDescriptionPart2.part2', {
        selectedStudyMode
      })

  const confirmMessage = isLearning
    ? t('finishLearning.message')
    : t('startLearning.message')

  const actionLabel = isLearning
    ? t('finishLearning.action')
    : t('startLearning.action')

  return (
    <AlertDialog open={isConfirmModalOpen} onOpenChange={toggleConfirmModal}>
      <AlertDialogContent className='w-5/6'>
        <AlertDialogHeader>
          <AlertDialogTitle className='font-medium'>
            {t('title')}
          </AlertDialogTitle>
          <AlertDialogDescription>{confirmMessage}</AlertDialogDescription>
        </AlertDialogHeader>

        <div className='text-center sm:text-left'>
          <p>{learningDescription}</p>
          <p className='mt-1'>{leaningDescriptionPart2}</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
          <AlertDialogAction onClick={handleLearning}>
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
