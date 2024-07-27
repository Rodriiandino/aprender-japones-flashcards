'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useModalStore } from '@/store/learn-store'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Dialog, DialogContent } from '../../ui/dialog'
import { CharacterDetails } from '@/types/card-type'
import { AllCharacters } from '@/data/characters'
import CardModalHeader from './card-modal-header'
import CardModalDetails from './card-modal-details'
import { Category } from '@/types/alphabet-type'
import CardModalVariations from './card-modal-variations'
import CardModalAiExample from './card-modal-aiExample'

export type AiExample = {
  [key: string]: { example: string }
}

export default function ModalContent() {
  const [character, setCharacter] = useState<CharacterDetails>({
    hiragana: '',
    katakana: '',
    romaji: ''
  })
  const [category, setCategory] = useState<Category>('hiragana')
  const [aiExample, setAiExample] = useState<AiExample>()

  const { isCardModal, toggleCardModal } = useModalStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

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

    setCategory(categoryParam as Category)
    setCharacter(AllCharacters[characterParam])
  }, [validateParams])

  useEffect(() => {
    fetchCardDetails()
  }, [fetchCardDetails])

  useEffect(() => {
    const initializeModal = () => {
      const result = validateParams()
      if (result) {
        toggleCardModal(true)
      }
    }

    initializeModal()
  }, [validateParams, toggleCardModal])

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

  return (
    <Dialog open={isCardModal} onOpenChange={handleModalClose}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          {category !== 'romaji' && (
            <CardModalHeader character={character} category={category} />
          )}
          <CardModalDetails character={character} category={category} />
        </div>

        <CardModalAiExample
          character={character}
          category={category}
          aiExample={aiExample}
          setAiExample={setAiExample}
        />

        <CardModalVariations
          character={character}
          category={category}
          fonts={fonts}
        />
      </DialogContent>
    </Dialog>
  )
}
