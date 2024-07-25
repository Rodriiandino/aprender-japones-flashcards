'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useAiStore, useModalStore } from '@/store/learn-store'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Dialog, DialogContent } from '../../ui/dialog'
import { CharacterDetails } from '@/types/card-type'
import { AllCharacters } from '@/data/characters'
import { Card, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Sparkles } from 'lucide-react'
import TooltipCustom from '../../tooltip-custom'
import { Separator } from '@/components/ui/separator'
import { StatItem } from '../../ui/stat-item'
import { fetchApiAi } from '@/lib/fetch-api-ai'
import CardModalHeader from './card-modal-header'
import CardModalDetails from './card-modal-details'
import { category } from '@/types/alphabet-type'

export default function ModalContent() {
  const [character, setCharacter] = useState<CharacterDetails>({
    hiragana: '',
    katakana: '',
    romaji: ''
  })
  const [category, setCategory] = useState<category>('hiragana')
  const { isCardModal, toggleCardModal } = useModalStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const { isAiActive } = useAiStore()
  const [aiExample, setAiExample] = useState<string>('')

  const validateParams = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const categoryParam = params.get('category')
    const characterParam = params.get('character')

    const isValidCategory =
      categoryParam === 'hiragana' ||
      categoryParam === 'katakana' ||
      categoryParam === 'romaji'
    const isValidCharacter = characterParam && AllCharacters[characterParam]

    if (!isValidCategory || !isValidCharacter) {
      params.delete('category')
      params.delete('character')
      const url = `${pathname}?${params.toString()}`
      replace(url)
      return false
    }

    return { categoryParam, characterParam }
  }, [pathname, replace, searchParams])

  const fetchCardDetails = useCallback(() => {
    const result = validateParams()
    if (!result) return

    const { categoryParam, characterParam } = result

    setCategory(categoryParam as category)
    setCharacter(AllCharacters[characterParam])
  }, [validateParams])

  useEffect(() => {
    fetchCardDetails()
  }, [fetchCardDetails])

  useEffect(() => {
    const initializeModal = () => {
      const result = validateParams()
      if (!result) return

      if (result) {
        toggleCardModal(true)
      }
    }

    initializeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleModalClose = useCallback(() => {
    toggleCardModal(false)
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('character')
    const url = `${pathname}?${params.toString()}`
    replace(url)
  }, [pathname, replace, searchParams, toggleCardModal])

  const fonts = useMemo(
    () => [
      'font-kosugi',
      'font-zen',
      'font-yuji',
      'font-mochiy',
      'font-shippori'
    ],
    []
  )

  const handleAiExample = async (character: string | string[]) => {
    const aiExample = await fetchApiAi(character, 'example')
    setAiExample(aiExample)
  }

  const renderVariations = useCallback(
    () => (
      <footer className='flex flex-col items-center gap-4'>
        <h3 className='text-lg sm:text-xl text-muted-foreground'>Variations</h3>
        <div className='flex gap-3 flex-wrap justify-center items-center'>
          {category === 'romaji'
            ? (['hiragana', 'katakana'] as Array<keyof CharacterDetails>).map(
                cat =>
                  fonts.map(font => (
                    <Card
                      key={`${cat}-${font}`}
                      className={`w-[75px] h-[75px] bg-secondary flex justify-center items-center ${font}`}
                    >
                      <CardTitle className='text-3xl font-normal'>
                        {character[cat]}
                      </CardTitle>
                    </Card>
                  ))
              )
            : fonts.map(font => (
                <Card
                  key={font}
                  className={`w-[80px] h-[80px] bg-secondary flex justify-center items-center ${font}`}
                >
                  <CardTitle className='text-4xl font-normal'>
                    {character[category]}
                  </CardTitle>
                </Card>
              ))}
        </div>
      </footer>
    ),
    [character, category, fonts]
  )

  return (
    <Dialog open={isCardModal} onOpenChange={handleModalClose}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          {category !== 'romaji' && (
            <CardModalHeader character={character} category={category} />
          )}
          <CardModalDetails character={character} category={category} />
        </div>
        {isAiActive && !aiExample && (
          <div className='flex justify-center items-center'>
            <TooltipCustom text='Generate a word using this character'>
              <Button
                size={'sm'}
                variant={'ghost'}
                className='flex gap-1'
                onClick={() => handleAiExample(character[category])}
              >
                <Sparkles size={16} /> Example
              </Button>
            </TooltipCustom>
          </div>
        )}
        {isAiActive && aiExample && (
          <>
            <StatItem label='AI Example' value={aiExample} />
            <Separator />
          </>
        )}
        {renderVariations()}
      </DialogContent>
    </Dialog>
  )
}
