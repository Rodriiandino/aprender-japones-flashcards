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
  const { alphabet, cards, howToStudy } = useConfigLearnStore()
  const { confirmModal, setConfirmModal, setLearningModal } = useModalStore()
  const {
    setIsLearned,
    setCardsLength,
    setCards,
    setAlphabet,
    setCardsCorrect,
    setHowToStudy,
    setCurrentCard,
    setPercentCorrect,
    setCardsAlreadyPracticed
  } = useLearnStore()

  const handleStartLearning = () => {
    setCards(cards)
    setCardsLength(cards.length)
    setAlphabet(alphabet)
    setCardsCorrect(0)
    setHowToStudy(howToStudy)
    setPercentCorrect(0)
    setLearningModal(true)
    setConfirmModal(false)
    setCardsAlreadyPracticed([])
    setCurrentCard(
      howToStudy === 'random' ? generateRandomNumber(cards.length) : 0
    )
    setIsLearned(true)
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
          You going to learn {cards.length} characters from the {alphabet}
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
