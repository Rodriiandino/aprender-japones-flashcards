import { useTranslations } from 'next-intl'

import TooltipCustom from '@/components/tooltip-custom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { StatItem } from '@/components/ui/stat-item'
import { useAiStore } from '@/store/learn-store'
import { Category } from '@/types/alphabet-type'
import { CharacterDetails } from '@/types/card-type'
import { Sparkles } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { AiExample } from './card-modal-content'
import { Skeleton } from '@/components/ui/skeleton'
import { useAiHelper } from '@/components/hooks/useAiHelper'

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
  const t = useTranslations('ModalComponent.card.aiExample')

  const { isAiActive } = useAiStore()
  const { isLoading, generateAiContent, regenerateAiContent } = useAiHelper()

  const aiKey = useMemo(() => {
    return Array.isArray(character[category])
      ? character[category][0]
      : character[category]
  }, [character, category])

  const handleAiExample = useCallback(async () => {
    const result = await generateAiContent(aiKey, 'example')
    if (result) {
      setAiExample(prev => ({
        ...prev,
        [aiKey]: { example: result }
      }))
    }
  }, [aiKey, generateAiContent, setAiExample])

  const handleRegenerateAiExample = useCallback(async () => {
    if (!aiExample || !aiExample[aiKey]) return

    const result = await regenerateAiContent(
      aiKey,
      'example',
      aiExample[aiKey].example
    )
    if (result) {
      setAiExample(prev => ({
        ...prev,
        [aiKey]: { example: result }
      }))
    }
  }, [aiKey, regenerateAiContent, setAiExample, aiExample])

  if (!isAiActive) return null

  if (isLoading) {
    return <Skeleton className='h-8 w-full' />
  }

  if (aiExample && aiExample[aiKey]) {
    return (
      <>
        <StatItem label='AI Example' value={aiExample[aiKey].example} />
        <Button
          size='sm'
          variant='ghost'
          className='flex gap-1'
          onClick={handleRegenerateAiExample}
        >
          <Sparkles size={16} /> {t('regenerate')}
        </Button>
        <Separator />
      </>
    )
  }

  return (
    <div className='flex justify-center items-center'>
      <TooltipCustom text={t('tooltip')}>
        <Button
          size='sm'
          variant='ghost'
          className='flex gap-1'
          onClick={handleAiExample}
        >
          <Sparkles size={16} /> {t('button')}
        </Button>
      </TooltipCustom>
    </div>
  )
}
