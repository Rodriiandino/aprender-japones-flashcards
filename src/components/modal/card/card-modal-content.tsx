'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useModalStore, useCustomizationStore } from '@/store/learn-store'
import { useSearchParams } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/routing'
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

const initialCharacterData = {
  character: {
    hiragana: '',
    katakana: '',
    romaji: ''
  } as CharacterDetails,
  category: 'hiragana' as Category
}

export default function ModalContent() {
  const [characterData, setCharacterData] = useState(initialCharacterData)
  const [aiExample, setAiExample] = useState<AiExample>()
  const { isCardModal, toggleCardModal } = useModalStore()
  const { selectedFont } = useCustomizationStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const validateAndGetParams = useMemo(() => {
    const categoryParam = searchParams.get('category')
    const characterParam = searchParams.get('character')

    if (!categoryParam || !characterParam) return null

    const isValidCategory = ['hiragana', 'katakana', 'romaji'].includes(
      categoryParam
    )
    const character = AllCharacters[characterParam]

    if (!isValidCategory || !character) {
      return null
    }

    return {
      category: categoryParam as Category,
      character
    }
  }, [searchParams])

  useEffect(() => {
    if (validateAndGetParams) {
      setCharacterData(validateAndGetParams)
      toggleCardModal(true)
    }

    return () => {
      if (!validateAndGetParams) {
        setCharacterData(initialCharacterData)
        setAiExample(undefined)
      }
    }
  }, [validateAndGetParams, toggleCardModal])

  const handleModalClose = useCallback(() => {
    toggleCardModal(false)
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('character')
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [pathname, replace, searchParams, toggleCardModal])

  const fonts = useMemo(
    () =>
      [
        'font-noto',
        'font-kosugi',
        'font-zen',
        'font-yuji',
        'font-mochiy',
        'font-shippori'
      ].filter(font => !font.endsWith(selectedFont)),
    [selectedFont]
  )

  if (!validateAndGetParams) {
    return null
  }

  const { character, category } = characterData

  return (
    <Dialog open={isCardModal} onOpenChange={handleModalClose}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          {category !== 'romaji' && (
            <CardModalHeader character={character} category={category} />
          )}
          <CardModalDetails
            character={character}
            category={category}
            selectedFont={selectedFont}
          />
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
