import Content from '@/components/content'
import ConfirmModal from '@/components/modal/confirm-modal'
import LearningModal from '@/components/modal/learning-modal'

export default function Home() {
  return (
    <>
      <Content />
      <LearningModal />
      <ConfirmModal />
    </>
  )
}
