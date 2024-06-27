'use client'

import { Button } from '@/components/ui/button'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { Heart } from 'lucide-react'
import { useFavoriteStore } from '@/store/learn-store'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { AlphabetCategory } from '@/types/alphabet-type'

interface FavoriteButtonProps {
  character: CharacterDetails | CharacterCard
  category: AlphabetCategory
}

export default function FavoriteButton({
  character,
  category
}: FavoriteButtonProps) {
  const { favoriteCards, setFavoriteCards } = useFavoriteStore()
  const [isFavorite, setIsFavorite] = useState(false)

  const card: CharacterCard = {
    character: 'character' in character ? character.character : character,
    type: category
  }

  const isCardFavorite = useCallback(
    (favCard: CharacterCard) =>
      favCard.character.romaji === card.character.romaji &&
      favCard.type === card.type,
    [card.character.romaji, card.type]
  )

  const handleFavorite = () => {
    if (favoriteCards.some(isCardFavorite)) {
      const newFavoriteCards = favoriteCards.filter(
        favCard => !isCardFavorite(favCard)
      )
      setFavoriteCards(newFavoriteCards)
    } else {
      setFavoriteCards([...favoriteCards, card])
    }
  }

  useEffect(() => {
    setIsFavorite(favoriteCards.some(isCardFavorite))
  }, [favoriteCards, isCardFavorite])

  return (
    <Button
      variant='ghost'
      size='sm'
      className='p-0 absolute top-2 right-2 w-fit h-fit'
      onClick={handleFavorite}
    >
      <Heart
        size={14}
        className={cn('transition-colors', { 'text-red': isFavorite })}
      />
    </Button>
  )
}
