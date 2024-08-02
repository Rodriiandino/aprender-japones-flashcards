import { Button } from '@/components/ui/button'
import { DialogDescription } from '@/components/ui/dialog'
import { Sparkles, Repeat } from 'lucide-react'
import { useCallback } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useAiHintStore, useAiStore } from '@/store/learn-store'
import { useAiHelper } from '@/components/hooks/useAiHelper'

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
  const { aiHint, setAiHint } = useAiHintStore()
  const { isLoading, generateAiContent, regenerateAiContent } = useAiHelper()

  const character = effectiveCategory === 'hiragana' ? hiragana : katakana

  const handleAiHint = useCallback(async () => {
    const result = await generateAiContent(character, 'hint')

    if (result) {
      setAiHint(result)
    }
  }, [character, generateAiContent, setAiHint])

  const handleRegenerateAiHint = useCallback(async () => {
    if (!aiHint) return

    const result = await regenerateAiContent(character, 'hint', aiHint)

    if (result) {
      setAiHint(result)
    }
  }, [aiHint, character, regenerateAiContent, setAiHint])

  if (!isAiActive) return null

  if (isLoading) return <Skeleton className='h-4' />

  if (isFinished) {
    return null
  }

  if (aiHint) {
    return (
      <div className='flex items-center gap-2'>
        <Button
          size={'icon'}
          variant={'ghost'}
          className='w-fit opacity-70 hover:bg-transparent hover:opacity-100'
          onClick={handleRegenerateAiHint}
        >
          <Repeat size={16} />
        </Button>
        <DialogDescription className='text-xs'>{aiHint}</DialogDescription>
      </div>
    )
  }

  return (
    <Button
      size={'sm'}
      variant={'ghost'}
      className='flex gap-1 w-fit'
      onClick={handleAiHint}
    >
      <Sparkles size={16} /> Hint
    </Button>
  )
}
