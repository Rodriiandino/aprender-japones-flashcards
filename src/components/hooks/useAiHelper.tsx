import { useTranslations, useLocale } from 'next-intl'
import { fetchApiAi } from '@/lib/fetch-api-ai'
import { useAiStore } from '@/store/learn-store'
import { useState, useCallback } from 'react'
import { toast } from 'sonner'

interface UseAiHelperResult {
  isLoading: boolean

  generateAiContent: (
    character: string,
    type: 'example' | 'hint'
  ) => Promise<string | null>

  regenerateAiContent: (
    character: string,
    type: 'example' | 'hint',
    lastResult: string
  ) => Promise<string | null>
}

export function useAiHelper(): UseAiHelperResult {
  const t = useTranslations('Sonner.ai')
  const locale = useLocale()
  const { isAiActive, iaToken, aiProvider } = useAiStore()
  const [isLoading, setIsLoading] = useState(false)

  const language = locale === 'es' ? 'es' : 'en'

  const generateAiContent = useCallback(
    async (
      character: string,
      type: 'example' | 'hint'
    ): Promise<string | null> => {
      if (!isAiActive || isLoading) return null

      setIsLoading(true)
      try {
        const result = await fetchApiAi({
          character,
          type,
          token: iaToken,
          provider: aiProvider,
          language
        })
        return result
      } catch (error) {
        console.error(`Failed to fetch AI ${type}:`, error)

        toast.error(
          t('title', {
            type
          }),
          {
            description: t('description'),
            action: { label: t('action'), onClick: () => {} }
          }
        )
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [isAiActive, isLoading, iaToken, aiProvider, t, language]
  )

  const regenerateAiContent = useCallback(
    async (
      character: string,
      type: 'example' | 'hint',
      lastResult: string
    ): Promise<string | null> => {
      if (!isAiActive || isLoading) return null

      setIsLoading(true)
      try {
        const result = await fetchApiAi({
          character,
          type,
          token: iaToken,
          provider: aiProvider,
          lastResult,
          language
        })
        return result
      } catch (error) {
        console.error(`Failed to fetch AI ${type}:`, error)

        toast.error(
          t('title', {
            type
          }),
          {
            description: t('description'),
            action: { label: t('action'), onClick: () => {} }
          }
        )
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [isAiActive, isLoading, iaToken, aiProvider, t, language]
  )

  return { isLoading, generateAiContent, regenerateAiContent }
}
