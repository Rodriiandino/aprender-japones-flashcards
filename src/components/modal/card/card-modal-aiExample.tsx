import TooltipCustom from '@/components/tooltip-custom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { StatItem } from '@/components/ui/stat-item'
import { fetchApiAi } from '@/lib/fetch-api-ai'
import { useAiStore } from '@/store/learn-store'
import { Category } from '@/types/alphabet-type'
import { CharacterDetails } from '@/types/card-type'
import { Sparkles } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { AiExample } from './card-modal-content'
import { Skeleton } from '@/components/ui/skeleton'

interface CardModalAiExampleProps {
  character: CharacterDetails
  category: Category
  aiExample: AiExample | undefined
  setAiExample: React.Dispatch<React.SetStateAction<AiExample | undefined>>
}

export default function CardModalAiExample({
  character,
  category,
  aiExample,
  setAiExample
}: CardModalAiExampleProps) {
  const { isAiActive } = useAiStore()
  const [isLoading, setIsLoading] = useState(false)

  const aiKey = useMemo(() => {
    return Array.isArray(character[category])
      ? character[category][0]
      : character[category]
  }, [character, category])

  //? Todo: uncomment this block
  // const handleAiExample = useCallback(async () => {
  //   if (isLoading || (aiExample && aiExample[aiKey])) return

  //   setIsLoading(true)
  //   try {
  //     const example = await fetchApiAi(aiKey, 'example')
  //     setAiExample(prev => ({
  //       ...prev,
  //       [aiKey]: { example }
  //     }))
  //   } catch (error) {
  //     console.error('Failed to fetch AI example:', error)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [aiExample, aiKey, isLoading, setAiExample])

  //! Todo: remove this block
  const handleAiExample = useCallback(() => {
    setIsLoading(true)

    setTimeout(() => {
      setAiExample(prev => ({
        ...prev,
        [aiKey]: { example: 'Example' }
      }))
      setIsLoading(false)
    }, 2000)
  }, [aiKey, setAiExample])

  if (!isAiActive) return null

  if (isLoading) {
    return <Skeleton className='h-8 w-full' />
  }

  if (aiExample && aiExample[aiKey]) {
    return (
      <>
        <StatItem label='AI Example' value={aiExample[aiKey].example} />
        <Separator />
      </>
    )
  }

  return (
    <div className='flex justify-center items-center'>
      <TooltipCustom text='Generate a word using this character'>
        <Button
          size='sm'
          variant='ghost'
          className='flex gap-1'
          onClick={handleAiExample}
        >
          <Sparkles size={16} /> Example
        </Button>
      </TooltipCustom>
    </div>
  )
}
