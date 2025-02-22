'use client'

import { Button } from '@/components/ui/button'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { Heart } from 'lucide-react'
import { useFavoriteStore } from '@/store/learn-store'
import { useCallback, memo, useMemo } from 'react'
import { cn } from '@/lib/utils'
import { AlphabetCategory } from '@/types/alphabet-type'

interface FavoriteButtonProps {
  character: CharacterDetails | CharacterCard
  category: AlphabetCategory
  className?: string
}

const FavoriteButton = memo(function FavoriteButton({
  character,
  category,
  className
}: FavoriteButtonProps) {
  const favoriteCards = useFavoriteStore(state => state.favoriteCards)
  const setFavoriteCards = useFavoriteStore(state => state.setFavoriteCards)

  const card = useMemo(
    () => ({
      character: 'character' in character ? character.character : character,
      type: category
    }),
    [character, category]
  )

  const isCardFavorite = useCallback(
    (favCard: CharacterCard) =>
      favCard.character.romaji === card.character.romaji &&
      favCard.type === card.type,
    [card.character.romaji, card.type]
  )

  const handleFavorite = useCallback(() => {
    if (favoriteCards.some(isCardFavorite)) {
      const newFavoriteCards = favoriteCards.filter(
        favCard => !isCardFavorite(favCard)
      )
      setFavoriteCards(newFavoriteCards)
    } else {
      setFavoriteCards([...favoriteCards, card])
    }
  }, [favoriteCards, isCardFavorite, card, setFavoriteCards])

  const isFavorite = favoriteCards.some(isCardFavorite)

  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn('p-0 absolute top-2 right-2 w-fit h-fit', className)}
      onClick={handleFavorite}
    >
      <Heart
        size={14}
        className={cn('transition-colors', { 'text-red': isFavorite })}
      />
    </Button>
  )
})

export default FavoriteButton
