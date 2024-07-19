import { Button } from '@/components/ui/button'
import {
  useModalStore,
  useLearnStore,
  useConfigLearnStore
} from '@/store/learn-store'
import { toast } from 'sonner'

export default function FooterAside() {
  const { configCards } = useConfigLearnStore()
  const { toggleLearningModal, toggleConfirmModal } = useModalStore()
  const { isLearning } = useLearnStore()

  const handleStartLearning = () => {
    if (configCards.length < 10) {
      toast.info('Not enough cards to start learning', {
        description: 'Minimum of 10 cards required',
        action: { label: 'undo', onClick: () => {} }
      })
      return
    }

    if (!isLearning) {
      toggleConfirmModal(true)
      return
    }
    toggleLearningModal(true)
  }

  const handleCancelLearning = () => {
    toggleConfirmModal(true)
  }

  return (
    <footer className='flex gap-2 lg:flex-row flex-col pr-2 pt-2'>
      <Button
        variant='default'
        className='w-full sm:h-16 h-10 sm:text-base'
        onClick={handleStartLearning}
      >
        {isLearning ? 'Continue learning' : 'Start learning'}
      </Button>

      {isLearning && (
        <Button
          variant='secondary'
          className='lg:w-2/5 w-full sm:h-16 h-10 sm:text-xs'
          onClick={handleCancelLearning}
        >
          Cancel learning
        </Button>
      )}
    </footer>
  )
}
