'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { useModalStore } from '@/store/learn-store'
import ChatModalInput from './chat-modal-input'
import ChatModalMessages from './chat-modal-messages'
import { useChat } from 'ai/react'

export default function ChatModal() {
  const { isAiModalOpen, toggleAiModal } = useModalStore()
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/ai/chat'
  })

  return (
    <Dialog open={isAiModalOpen} onOpenChange={toggleAiModal}>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>Chat</DialogTitle>
          <DialogDescription>Chat with AI to learn Japanese</DialogDescription>
        </DialogHeader>
        <ChatModalMessages messages={messages} />
        <DialogFooter>
          <ChatModalInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
