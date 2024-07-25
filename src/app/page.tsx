import Content from '@/components/content'
import CardModal from '@/components/modal/card/card-modal'
import ConfirmModal from '@/components/modal/confirm-modal'
import LearningModal from '@/components/modal/learning/learning-modal'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <Content />
      <LearningModal />
      <ConfirmModal />
      <CardModal />
      <Toaster />
    </>
  )
}
