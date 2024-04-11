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
  const { cardsToLearn, alphabet, cards } = useConfigLearnStore()
  const { confirmModal, setConfirmModal, setLearningModal } = useModalStore()
  const {
    setIsLearned,
    setCardsToLearn,
    setCards,
    setAlphabet,
    setCardsCorrect
  } = useLearnStore()

  const handleStartLearning = () => {
    setCards(cards)
    setCardsToLearn(cardsToLearn)
    setAlphabet(alphabet)
    setIsLearned(true)
    setCardsCorrect(0)
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
          You going to learn {cardsToLearn} characters from the {alphabet}{' '}
        </p>
        <DialogFooter className='gap-2 flex-col'>
          <Button size='lg' onClick={handleStartLearning}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
