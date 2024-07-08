'use client'

import { useEffect, useState, useCallback } from 'react'
import { useModalStore } from '@/store/learn-store'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import { CharacterDetails } from '@/types/card-type'
import { AllCharacters } from '@/data/characters'
import { Heart } from 'lucide-react'
import { Card, CardTitle } from '../ui/card'

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

  const fetchCardDetails = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const categoryParam = params.get('category')
    const characterParam = params.get('character')

    if (categoryParam) {
      setCategory(categoryParam as 'hiragana' | 'katakana')
    }

    if (characterParam) {
      const cardDetails = AllCharacters[characterParam]
      setCard(cardDetails)
    }
  }, [searchParams])

  useEffect(() => {
    fetchCardDetails()
  }, [fetchCardDetails])

  const renderCardDetails = useCallback(() => {
    const oppositeCategory = category === 'hiragana' ? 'katakana' : 'hiragana'

    return (
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
    )
  }, [card, category])

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
    <Dialog open={isCardModal} onOpenChange={toggleCardModal}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          <DialogHeader className='h-fit flex items-end'>
            <Heart size={15} />
          </DialogHeader>
          {renderCardDetails()}
        </div>
        {renderVariations()}
      </DialogContent>
    </Dialog>
  )
}
