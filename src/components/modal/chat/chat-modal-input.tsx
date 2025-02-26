import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send, Square, Repeat, Loader2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

interface ChatModalInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  stop: () => void
  isLoading: boolean
  error: any
  reload: () => void
}

export default function ChatModalInput({
  handleSubmit,
  input,
  handleInputChange,
  stop,
  isLoading,
  error,
  reload
}: ChatModalInputProps) {
  const t = useTranslations('ModalComponent.chat.input')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const form = e.currentTarget.form
      if (form && input.trim()) {
        handleSubmit(
          new Event('submit') as unknown as React.FormEvent<HTMLFormElement>
        )
      }
    }
  }

  return (
    <div className='w-full chat-input'>
      <form
        onSubmit={handleSubmit}
        className='w-full p-1 flex items-end gap-1 bg-secondary/30 rounded-lg border border-secondary transition-colors focus-within:border-primary/50'
        aria-label='Chat input form'
      >
        <Textarea
          placeholder={t('placeholder')}
          className='min-h-10 h-10 text-sm resize-none border-none focus-visible:ring-0 shadow-none bg-transparent flex-grow py-2'
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          onKeyDown={handleKeyDown}
          aria-label='Type your message'
          rows={1}
          maxLength={1000}
        />

        <div className='flex items-center justify-center'>
          {!error && isLoading && (
            <Button
              variant='ghost'
              size='sm'
              className='h-10 w-10 shadow-none hover:bg-destructive/10 transition-colors rounded-full'
              onClick={stop}
              aria-label='Stop AI response'
              type='button'
            >
              <Square size={18} />
            </Button>
          )}

          {!isLoading && (
            <Button
              type='submit'
              variant='ghost'
              size='sm'
              className={`h-10 w-10 shadow-none rounded-full transition-colors flex items-center justify-center ${
                !input.trim()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary/20'
              }`}
              disabled={!input.trim() || isLoading}
              aria-label='Send message'
            >
              <Send size={18} className={input.trim() ? 'text-primary' : ''} />
            </Button>
          )}

          {error && (
            <Button
              variant='ghost'
              size='sm'
              className='h-10 w-10 shadow-none hover:bg-yellow-500/10 transition-colors rounded-full'
              onClick={reload}
              aria-label='Retry request'
              type='button'
            >
              <Repeat size={18} className='text-yellow-500' />
            </Button>
          )}
        </div>
      </form>

      {error && (
        <div className='text-red-500 text-xs mt-1 flex items-center gap-1'>
          <span className='rounded-full h-2 w-2 bg-red-500'></span>
          {t('error')}
        </div>
      )}

      {isLoading && (
        <div className='flex items-center gap-1 text-xs mt-1 text-muted-foreground'>
          <Loader2 size={12} className='animate-spin' />
          {t('typing')}
        </div>
      )}

      {input.length > 800 && (
        <div
          className={`text-xs mt-1 text-right ${
            input.length > 950 ? 'text-red-500' : 'text-muted-foreground'
          }`}
        >
          {input.length}/1000
        </div>
      )}
    </div>
  )
}
