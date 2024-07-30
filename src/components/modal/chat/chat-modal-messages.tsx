import { cn } from '@/lib/utils'

interface ChatModalMessagesProps {
  messages: { role: string; content: string }[]
}

export default function ChatModalMessages({
  messages
}: ChatModalMessagesProps) {
  const example = [
    { role: 'user', content: 'Hello' },
    { role: 'ai', content: 'こんにちは' },
    { role: 'user', content: 'How are you?' },
    { role: 'ai', content: '元気ですか？' },
    { role: 'user', content: 'Good' },
    { role: 'ai', content: 'よかった' }
  ]

  if (!messages.length) {
    return (
      <ul>
        {example.map((m, index) => (
          <li
            key={index}
            className={cn(
              'p-2 rounded-md relative w-fit max-w-full',
              m.role === 'user' ? 'ml-auto bg-secondary' : 'mr-auto'
            )}
          >
            <span
              className={cn(
                'font-bold absolute text-sm opacity-50',
                m.role === 'user' ? 'right-2 top-1' : 'left-2 top-1'
              )}
            >
              {m.role === 'user' ? 'User' : 'AI'}
            </span>
            <div className='pt-4'>{m.content}</div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul>
      {messages.map((m, index) => (
        <li key={index}>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </li>
      ))}
    </ul>
  )
}
