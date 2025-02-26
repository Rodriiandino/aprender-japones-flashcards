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
import { BookA, BookOpen, Mic, Info } from 'lucide-react'
import { marked } from 'marked'
import styles from './markdown.module.css'

interface ChatModalMessagesProps {
  messages: Message[]
}

function FormattedText({ text }: { text: string }) {
  const formattedText = marked(text)

  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  )
}

export default function ChatModalMessages({
  messages
}: ChatModalMessagesProps) {
  const t = useTranslations('ModalComponent.chat.features')

  if (messages.length === 0) {
    return (
      <div className='flex flex-wrap gap-2 items-center justify-evenly'>
        <Card className='w-48 h-36 p-4 flex flex-col items-center justify-center text-center'>
          <CardHeader className='p-0'>
            <BookA size={22} />
          </CardHeader>
          <CardContent className='p-0 h-full w-full flex flex-col items-center justify-evenly'>
            <CardTitle className='text-base font-medium'>
              {t('grammar.title')}
            </CardTitle>
            <CardDescription>{t('grammar.description')}</CardDescription>
          </CardContent>
        </Card>
        <Card className='w-48 h-36 p-4 flex flex-col items-center justify-center text-center'>
          <CardHeader className='p-0'>
            <BookOpen size={22} />
          </CardHeader>
          <CardContent className='p-0 h-full w-full flex flex-col items-center justify-evenly'>
            <CardTitle className='text-base font-medium'>
              {t('vocabulary.title')}
            </CardTitle>
            <CardDescription>{t('vocabulary.description')}</CardDescription>
          </CardContent>
        </Card>
        <Card className='w-48 h-36 p-4 flex flex-col items-center justify-center text-center'>
          <CardHeader className='p-0'>
            <Mic size={22} />
          </CardHeader>
          <CardContent className='p-0 h-full w-full flex flex-col items-center justify-evenly'>
            <CardTitle className='text-base font-medium'>
              {t('pronunciation.title')}
            </CardTitle>
            <CardDescription>{t('pronunciation.description')}</CardDescription>
          </CardContent>
        </Card>
        <Card className='w-48 h-36 p-4 flex flex-col items-center justify-center text-center'>
          <CardHeader className='p-0'>
            <Info size={22} />
          </CardHeader>
          <CardContent className='p-0 h-full w-full flex flex-col items-center justify-evenly'>
            <CardTitle className='text-base font-medium'>
              {t('kanji.title')}
            </CardTitle>
            <CardDescription>{t('kanji.description')}</CardDescription>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <ul className='max-h-96 h-full flex flex-col gap-2 overflow-y-auto p-1'>
      {messages.map((m, index) => (
        <li
          key={index}
          className={cn(
            'p-2 rounded-md relative w-fit max-w-full min-w-12',
            m.role === 'user' ? 'ml-auto bg-secondary' : 'mr-auto'
          )}
        >
          <span
            className={cn(
              'font-bold absolute text-xs opacity-50',
              m.role === 'user' ? 'right-2 top-1' : 'left-2 top-1'
            )}
          >
            {m.role === 'user' ? 'User' : 'AI'}
          </span>
          <div className='pt-4 text-sm'>
            {m.role === 'assistant' ? (
              <FormattedText text={m.content} />
            ) : (
              <>{m.content}</>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
