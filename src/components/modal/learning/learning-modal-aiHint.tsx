import { Button } from '@/components/ui/button'
import { fetchApiAi } from '@/lib/fetch-api-ai'
import { DialogDescription } from '@/components/ui/dialog'
import { Sparkles } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useAiHintStore, useAiStore } from '@/store/learn-store'

interface LearningModalAiHintProps {
  isFinished: boolean
  effectiveCategory: string
  hiragana: string
  katakana: string
}

export default function LearningModalAiHint({
  isFinished,
  effectiveCategory,
  hiragana,
  katakana
}: LearningModalAiHintProps) {
  const { isAiActive } = useAiStore()
  const [isLoading, setIsLoading] = useState(false)
  const { aiHint, setAiHint } = useAiHintStore()
  const character = effectiveCategory === 'hiragana' ? hiragana : katakana

  //? Todo: uncomment this block
  // const handleHint = useCallback(async () => {
  //   if (isLoading || aiHint) return

  //   setIsLoading(true)
  //   try {
  //     const example = await fetchApiAi(character, 'hint')
  //     setAiHint(example)
  //   } catch (error) {
  //     console.error('Failed to fetch AI example:', error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [aiHint, character, isLoading, setAiHint])

  //! Todo: remove this block
  const handleHint = useCallback(() => {
    setIsLoading(true)

    setTimeout(() => {
      setAiHint('Hint')
      setIsLoading(false)
    }, 1000)
  }, [setAiHint])

  if (!isAiActive) return null

  if (isLoading) return <Skeleton className='h-4' />

  if (isFinished) {
    return null
  }

  if (aiHint) {
    return <DialogDescription className='text-xs'>{aiHint}</DialogDescription>
  }

  return (
    <Button
      size={'sm'}
      variant={'ghost'}
      className='flex gap-1 w-fit'
      onClick={handleHint}
    >
      <Sparkles size={16} /> Hint
    </Button>
  )
}
