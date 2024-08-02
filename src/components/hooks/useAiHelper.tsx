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
  const { isAiActive, iaToken } = useAiStore()
  const [isLoading, setIsLoading] = useState(false)

  const generateAiContent = useCallback(
    async (
      character: string,
      type: 'example' | 'hint'
    ): Promise<string | null> => {
      if (!isAiActive || isLoading) return null

      setIsLoading(true)
      try {
        const result = await fetchApiAi(character, type, iaToken)
        return result
      } catch (error) {
        console.error(`Failed to fetch AI ${type}:`, error)

        toast.error(`Failed to generate AI ${type}`, {
          description: 'Please try again or Token not valid',
          action: { label: 'undo', onClick: () => {} }
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [isAiActive, iaToken, isLoading]
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
        const result = await fetchApiAi(character, type, iaToken, lastResult)
        return result
      } catch (error) {
        console.error(`Failed to fetch AI ${type}:`, error)

        toast.error(`Failed to generate AI ${type}`, {
          description: 'Please try again or Token not valid',
          action: { label: 'undo', onClick: () => {} }
        })
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [isAiActive, iaToken, isLoading]
  )

  return { isLoading, generateAiContent, regenerateAiContent }
}
