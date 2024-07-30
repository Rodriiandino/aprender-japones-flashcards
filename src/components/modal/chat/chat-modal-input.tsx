import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'

interface ChatModalInputProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function ChatModalInput({
  handleSubmit,
  input,
  handleInputChange
}: ChatModalInputProps) {
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
      />
      <Button
        type='submit'
        variant={'secondary'}
        size={'icon'}
        className='h-10 w-10 rounded-full shadow-none'
        disabled={!input}
      >
        <Send size='20' />
      </Button>
    </form>
  )
}
