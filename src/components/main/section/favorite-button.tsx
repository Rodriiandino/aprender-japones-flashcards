'use client'

import { Button } from '@/components/ui/button'
import { CharacterDetails } from '@/types/card-type'
import { Heart } from 'lucide-react'
import { useFavoriteStore } from '@/store/learn-store'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AlphabetCategory } from '@/types/alphabet-type'

export default function FavoriteButton({
  character,
  primary
}: {
  character: CharacterDetails
  primary: AlphabetCategory
}) {
  const { favoriteCards, setFavoriteCards } = useFavoriteStore()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    const card = { character, type: primary }
    if (
      favoriteCards.some(
        favCard =>
          favCard.character.romaji === character.romaji &&
          favCard.type === primary
      )
    ) {
      const newFavoriteCards = favoriteCards.filter(
        favCard =>
          !(
            favCard.character.romaji === character.romaji &&
            favCard.type === primary
          )
      )
      setFavoriteCards(newFavoriteCards)
    } else {
      setFavoriteCards([...favoriteCards, card])
    }
  }

  useEffect(() => {
    setIsFavorite(
      favoriteCards.some(
        favCard =>
          favCard.character.romaji === character.romaji &&
          favCard.type === primary
      )
    )
  }, [character, primary, favoriteCards])

  return (
    <Button
      variant='ghost'
      size='sm'
      className='p-0 absolute top-2 right-2 w-fit h-fit'
      onClick={handleFavorite}
    >
      <Heart
        size={14}
        className={cn('transition-colors', {
          'text-red': isFavorite
        })}
      />
    </Button>
  )
}
