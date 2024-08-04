import Content from '@/components/content'
import CardModal from '@/components/modal/card/card-modal'
import ChatModal from '@/components/modal/chat/chat-modal'
import ConfirmModal from '@/components/modal/confirm-modal'
import PrimaryHelpModal from '@/components/modal/help/primary-help-modal'
import LearningModal from '@/components/modal/learning/learning-modal'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <Content />
      <LearningModal />
      <ConfirmModal />
      <CardModal />
      <ChatModal />
      <PrimaryHelpModal />
      <Toaster />
    </>
  )
}
