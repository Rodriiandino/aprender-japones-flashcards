import Content from '@/components/content'
import ConfirmModal from '@/components/modal/confirm-modal'
import LearningModal from '@/components/modal/learning-modal'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <Content />
      <LearningModal />
      <ConfirmModal />
      <Toaster />
    </>
  )
}
