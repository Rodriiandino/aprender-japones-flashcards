import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Message } from 'ai'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import { BookA, BookOpen, Mic, Info, BotIcon, UserIcon } from 'lucide-react'
import { marked } from 'marked'
import styles from './markdown.module.css'
import { memo, useRef } from 'react'

interface ChatModalMessagesProps {
  messages: Message[]
  isLoading?: boolean
}

const FormattedText = memo(({ text }: { text: string }) => {
  const formattedText = marked(text)

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  )
})

FormattedText.displayName = 'FormattedText'

const FeatureCard = memo(
  ({
    icon: Icon,
    title,
    description
  }: {
    icon: React.ElementType
    title: string
    description: string
  }) => (
    <Card className='w-full p-4 flex flex-col gap-3 items-center justify-center text-center hover:bg-secondary/40 transition-colors cursor-pointer'>
      <CardHeader className='p-0'>
        <Icon size={22} className='text-primary' />
      </CardHeader>
      <CardContent className='p-0 h-full w-full flex flex-col items-center justify-evenly'>
        <CardTitle className='text-base font-medium'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
)

FeatureCard.displayName = 'FeatureCard'

export default function ChatModalMessages({
  messages,
  isLoading = false
}: ChatModalMessagesProps) {
  const t = useTranslations('ModalComponent.chat.features')

  const features = [
    {
      icon: BookA,
      title: t('grammar.title'),
      description: t('grammar.description')
    },
    {
      icon: BookOpen,
      title: t('vocabulary.title'),
      description: t('vocabulary.description')
    },
    {
      icon: Mic,
      title: t('pronunciation.title'),
      description: t('pronunciation.description')
    },
    {
      icon: Info,
      title: t('kanji.title'),
      description: t('kanji.description')
    }
  ]

  if (messages.length === 0) {
    return (
      <div className='h-full flex flex-col sm:flex-row sm:flex-wrap gap-3 items-center justify-evenly p-2 overflow-y-auto'>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    )
  }

  return (
    <div className='max-h-full overflow-y-auto overflow-x-hidden p-1 scrollbar-thin flex flex-col gap-3'>
      <ul
        className='w-full flex flex-col gap-3'
        role='log'
        aria-live='polite'
        aria-atomic='false'
      >
        {messages.map((m, index) => (
          <li
            key={index}
            className={cn(
              'p-3 rounded-lg relative w-fit max-w-[90%] min-w-12 animate-fadeIn',
              m.role === 'user'
                ? 'ml-auto bg-secondary text-secondary-foreground shadow-md'
                : 'mr-auto bg-primary/15 border border-primary/30 text-foreground shadow-sm'
            )}
            aria-label={`${m.role === 'user' ? 'User' : 'AI'} message`}
          >
            <div className='flex items-center gap-1 mb-1 text-xs opacity-80'>
              {m.role === 'user' ? (
                <UserIcon size={14} aria-hidden='true' />
              ) : (
                <BotIcon
                  size={14}
                  className='text-primary'
                  aria-hidden='true'
                />
              )}
              <span
                className={
                  m.role === 'assistant' ? 'font-medium text-primary' : ''
                }
              >
                {m.role === 'user' ? 'You' : 'AI Assistant'}
              </span>
            </div>

            <div
              className={cn(
                'text-sm break-words',
                m.role === 'assistant' ? 'text-foreground' : ''
              )}
            >
              {m.role === 'assistant' ? (
                <FormattedText text={m.content} />
              ) : (
                <>{m.content}</>
              )}
            </div>
          </li>
        ))}

        {isLoading && (
          <li
            className={cn(
              'p-3 rounded-lg relative w-fit max-w-[90%] mr-auto bg-primary/15 border border-primary/30 text-foreground shadow-sm'
            )}
          >
            <div className='flex items-center gap-1 mb-1 text-xs opacity-80'>
              <BotIcon size={14} className='text-primary' aria-hidden='true' />
              <span className='font-medium text-primary'>AI Assistant</span>
            </div>
            <div className='flex gap-1.5 items-center mt-1 pl-1'>
              <span className='animate-pulse h-2.5 w-2.5 bg-primary rounded-full' />
              <span className='animate-pulse h-2.5 w-2.5 bg-primary rounded-full [animation-delay:0.2s]' />
              <span className='animate-pulse h-2.5 w-2.5 bg-primary rounded-full [animation-delay:0.4s]' />
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
