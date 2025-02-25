import dynamic from 'next/dynamic'
import Content from '@/components/content'
import { Toaster } from '@/components/ui/sonner'

const LearningModal = dynamic(
  () => import('@/components/modal/learning/learning-modal'),
  {
    ssr: false
  }
)
const ConfirmModal = dynamic(() => import('@/components/modal/confirm-modal'), {
  ssr: false
})
const CardModal = dynamic(() => import('@/components/modal/card/card-modal'), {
  ssr: false
})
const ChatModal = dynamic(() => import('@/components/modal/chat/chat-modal'), {
  ssr: false
})
const PrimaryHelpModal = dynamic(
  () => import('@/components/modal/help/primary-help-modal'),
  {
    ssr: false
  }
)

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
