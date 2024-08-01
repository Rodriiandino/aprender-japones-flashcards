import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send, Square, Repeat } from 'lucide-react'

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full p-1 flex items-center bg-secondary rounded-md'
    >
      <Textarea
        placeholder='Type your message here'
        className='min-h-10 h-10 text resize-none border-none focus-visible:ring-0 shadow-none'
        value={input}
        onChange={handleInputChange}
        disabled={isLoading}
        onKeyDown={handleKeyDown}
      />

      {!error && isLoading && (
        <Button
          variant='ghost'
          size='icon'
          className='h-10 w-10 shadow-none hover:bg-background/70'
          onClick={stop}
        >
          <Square size='20' />
        </Button>
      )}

      {!error && !isLoading && (
        <Button
          type='submit'
          variant='ghost'
          size='icon'
          className='h-10 w-10 shadow-none hover:bg-background/70'
          disabled={!input || isLoading}
        >
          <Send size='20' />
        </Button>
      )}

      {error && (
        <Button
          variant='ghost'
          size='icon'
          className='h-10 w-10 shadow-none hover:bg-background/70'
          onClick={reload}
        >
          <Repeat size='20' />
        </Button>
      )}
    </form>
  )
}
