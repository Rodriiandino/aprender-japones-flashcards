'use client'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { useAiStore, useModalStore } from '@/store/learn-store'
import ChatModalInput from './chat-modal-input'
import ChatModalMessages from './chat-modal-messages'
import { useChat } from 'ai/react'
import TooltipCustom from '@/components/tooltip-custom'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'

export default function ChatModal() {
  const t = useTranslations('ModalComponent.chat.header')
  const { isAiModalOpen, toggleAiModal } = useModalStore()
  const { iaToken, aiProvider } = useAiStore()

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    reload,
    setMessages
  } = useChat({
    api: '/api/ai/chat',
    body: {
      token: iaToken,
      provider: aiProvider
    }
  })

  return (
    <Dialog open={isAiModalOpen} onOpenChange={toggleAiModal}>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>{t('description')}</DialogDescription>
          {messages.length > 0 && (
            <TooltipCustom text={t('clearTooltip')}>
              <Button
                variant={'ghost'}
                size={'sm'}
                className='absolute top-6 right-1 opacity-50 hover:bg-transparent hover:opacity-100'
                onClick={() => setMessages([])}
              >
                <Trash size={16} />
              </Button>
            </TooltipCustom>
          )}
        </DialogHeader>
        <ChatModalMessages messages={messages} />
        <DialogFooter>
          <ChatModalInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            stop={stop}
            isLoading={isLoading}
            error={error}
            reload={reload}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
