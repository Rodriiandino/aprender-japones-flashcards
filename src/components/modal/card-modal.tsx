'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import { useModalStore } from '@/store/learn-store'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import { CharacterDetails } from '@/types/card-type'
import { AllCharacters } from '@/data/characters'
import { Card, CardTitle } from '../ui/card'
import FavoriteButton from '../main/section/favorite-button'

export default function CardModal() {
  const [card, setCard] = useState<CharacterDetails>({
    hiragana: '',
    katakana: '',
    romaji: ''
  })
  const [category, setCategory] = useState<'hiragana' | 'katakana'>('hiragana')
  const { isCardModal, toggleCardModal } = useModalStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const validateParams = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const categoryParam = params.get('category')
    const characterParam = params.get('character')

    const isValidCategory =
      categoryParam === 'hiragana' || categoryParam === 'katakana'
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

    setCategory(categoryParam as 'hiragana' | 'katakana')
    setCard(AllCharacters[characterParam])
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

  const oppositeCategory = useMemo(
    () => (category === 'hiragana' ? 'katakana' : 'hiragana'),
    [category]
  )

  const renderCardDetails = useCallback(
    () => (
      <div className='flex'>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <DialogTitle className='text-5xl sm:text-7xl'>
            {card[category]}
          </DialogTitle>
          <DialogDescription>{category}</DialogDescription>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl sm:text-2xl'>{card[oppositeCategory]}</h3>
            <DialogDescription>{oppositeCategory}</DialogDescription>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3>
              {typeof card.romaji === 'string'
                ? card.romaji
                : card.romaji.join(', ')}
            </h3>
            <DialogDescription>Romaji</DialogDescription>
          </div>
        </div>
      </div>
    ),
    [card, category, oppositeCategory]
  )

  const renderVariations = useCallback(
    () => (
      <footer className='flex flex-col items-center gap-4'>
        <h3 className='text-lg sm:text-xl text-muted-foreground'>Variations</h3>
        <div className='flex gap-3 flex-wrap justify-center items-center'>
          <Card className='w-[80px] h-[80px] bg-secondary flex justify-center items-center font-kosugi'>
            <CardTitle className='text-4xl font-normal'>
              {card[category]}
            </CardTitle>
          </Card>
          <Card className='w-[80px] h-[80px] bg-secondary flex justify-center items-center font-zen'>
            <CardTitle className='text-4xl font-normal'>
              {card[category]}
            </CardTitle>
          </Card>
          <Card className='w-[80px] h-[80px] bg-secondary flex justify-center items-center font-yuji'>
            <CardTitle className='text-4xl font-normal'>
              {card[category]}
            </CardTitle>
          </Card>
          <Card className='w-[80px] h-[80px] bg-secondary flex justify-center items-center font-mochiy'>
            <CardTitle className='text-4xl font-normal'>
              {card[category]}
            </CardTitle>
          </Card>
          <Card className='w-[80px] h-[80px] bg-secondary flex justify-center items-center font-shippori'>
            <CardTitle className='text-4xl font-normal'>
              {card[category]}
            </CardTitle>
          </Card>
        </div>
      </footer>
    ),
    [card, category]
  )

  return (
    <Dialog open={isCardModal} onOpenChange={handleModalClose}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          <DialogHeader className='h-fit flex items-end'>
            <FavoriteButton
              character={card}
              category={category}
              className='static'
            />
          </DialogHeader>
          {renderCardDetails()}
        </div>
        {renderVariations()}
      </DialogContent>
    </Dialog>
  )
}
