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

export default function ConfirmModal() {
  const { cardsToLearn, alphabet, cards, howToStudy } = useConfigLearnStore()
  const { confirmModal, setConfirmModal, setLearningModal } = useModalStore()
  const {
    setIsLearned,
    setCardsToLearn,
    setCards,
    setAlphabet,
    setCardsCorrect,
    setHowToStudy,
    setCurrentCard,
    setPercentCorrect
  } = useLearnStore()

  const handleStartLearning = () => {
    setIsLearned(true)
    setCards(cards)
    setCardsToLearn(cardsToLearn)
    setAlphabet(alphabet)
    setCardsCorrect(0)
    setHowToStudy(howToStudy)
    setCurrentCard(0)
    setPercentCorrect(0)
    setLearningModal(true)
    setConfirmModal(false)
  }

  return (
    <Dialog open={confirmModal} onOpenChange={setConfirmModal}>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>Confirm</DialogTitle>

          <DialogDescription>
            Are you sure you want to start learning?
          </DialogDescription>
        </DialogHeader>

        <p>
          You going to learn {cardsToLearn} characters from the {alphabet}
        </p>
        <p>You will learn in {howToStudy} mode.</p>
        <DialogFooter className='gap-2 flex-col'>
          <Button size='lg' onClick={handleStartLearning}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
