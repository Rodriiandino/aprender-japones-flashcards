import ConfirmModal from '@/components/modal/confirm-modal'
import LearningModal from '@/components/modal/learning-modal'
import { ResizableContent } from '@/components/resizable-content'

export default function Home() {
  return (
    <div>
      <ResizableContent />
      <LearningModal />
      <ConfirmModal />
    </div>
  )
}
