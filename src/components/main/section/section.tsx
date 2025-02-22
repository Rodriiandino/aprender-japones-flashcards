'use client'

import { useMemo } from 'react'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore, useFavoriteStore } from '@/store/learn-store'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import CardList from './card-list'
import NoCardsAvailable from './no-cards-available'
import LoadingCards from './loading-cards'

export default function Section() {
  const { selectedAlphabet } = useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()

  const configCards = useMemo(() => {
    if (selectedAlphabet === 'favorite') {
      return favoriteCards
    } else if (selectedAlphabet === 'hiragana+katakana') {
      return Object.values(AllCharacters).flatMap(char => [
        { character: char, type: 'hiragana' },
        { character: char, type: 'katakana' }
      ])
    } else {
      return Object.values(AllCharacters)
    }
  }, [selectedAlphabet, favoriteCards]) as CharacterDetails[] | CharacterCard[]

  if (!configCards) {
    return <LoadingCards />
  }

  if (configCards.length === 0) {
    return <NoCardsAvailable />
  }

  return (
    <CardList configCards={configCards} selectedAlphabet={selectedAlphabet} />
  )
}
