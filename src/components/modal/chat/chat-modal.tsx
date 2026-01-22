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
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import TooltipCustom from '@/components/tooltip-custom'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'

// Create a stable transport instance outside the component or memoize it
const createTransport = () =>
  new DefaultChatTransport({
    api: '/api/ai/chat'
  })

export default function ChatModal() {
  const t = useTranslations('ModalComponent.chat.header')
  const { isAiModalOpen, toggleAiModal } = useModalStore()
  const { iaToken, aiProvider } = useAiStore()
  const [input, setInput] = useState('')

  // Memoize transport with empty deps - it never needs to change
  const transport = useMemo(createTransport, [])

  const {
    messages,
    sendMessage,
    status,
    stop,
    error,
    regenerate,
    setMessages
  } = useChat({
    transport
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    if (isAiModalOpen) {
      const timer = setTimeout(() => {
        document
          .querySelector('.chat-input')
          ?.querySelector('textarea')
          ?.focus()
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isAiModalOpen])

  const handleClearMessages = () => {
    setMessages([])
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    // Pass dynamic values at request time (recommended pattern)
    sendMessage(
      { text: input },
      {
        body: {
          token: iaToken,
          provider: aiProvider
        }
      }
    )
    setInput('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  return (
    <Dialog open={isAiModalOpen} onOpenChange={toggleAiModal}>
      <DialogContent
        className='sm:w-5/6 md:max-w-3xl w-[95%] h-[80vh] max-h-[800px] flex flex-col'
        aria-labelledby='chat-dialog-title'
        aria-describedby='chat-dialog-description'
      >
        <DialogHeader className='relative'>
          <DialogTitle className='font-medium text-lg' id='chat-dialog-title'>
            {t('title')}
          </DialogTitle>
          <DialogDescription id='chat-dialog-description'>
            {t('description')}
          </DialogDescription>

          <div className='absolute right-0 top-0 flex items-center gap-2'>
            {messages.length > 0 && (
              <TooltipCustom text={t('clearTooltip')}>
                <Button
                  variant={'ghost'}
                  size={'sm'}
                  className='opacity-50 hover:bg-destructive/10 hover:opacity-100 transition-opacity'
                  onClick={handleClearMessages}
                  aria-label={t('clearTooltip')}
                >
                  <Trash size={16} />
                </Button>
              </TooltipCustom>
            )}
          </div>
        </DialogHeader>

        <div className='flex-grow overflow-hidden flex flex-col'>
          <ChatModalMessages messages={messages} isLoading={isLoading} />
        </div>

        <DialogFooter className='mt-2'>
          <ChatModalInput
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            stop={stop}
            isLoading={isLoading}
            error={error}
            regenerate={regenerate}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
