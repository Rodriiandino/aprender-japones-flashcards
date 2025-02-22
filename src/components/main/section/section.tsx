'use client'

import { useCallback, useEffect, useState } from 'react'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore, useFavoriteStore } from '@/store/learn-store'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import CardList from './card-list'
import NoCardsAvailable from './no-cards-available'
import LoadingCards from './loading-cards'

const getHiraganaAndKatakanaCards = (
  characters: Record<string, CharacterDetails>
): CharacterCard[] => {
  return Object.values(characters).flatMap(char => [
    { character: char, type: 'hiragana' },
    { character: char, type: 'katakana' }
  ])
}

const getConfigCards = (
  selectedAlphabet: string,
  favoriteCards: CharacterCard[]
): CharacterCard[] | CharacterDetails[] => {
  switch (selectedAlphabet) {
    case 'favorite':
      return favoriteCards
    case 'hiragana+katakana':
      return getHiraganaAndKatakanaCards(AllCharacters)
    default:
      return Object.values(AllCharacters)
  }
}

export default function Section() {
  const { configCards, setConfigCards, selectedAlphabet } =
    useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()
  const [loading, setLoading] = useState(true)

  const loadCards = useCallback(() => {
    setConfigCards(getConfigCards(selectedAlphabet, favoriteCards))
    setLoading(false)
  }, [selectedAlphabet, favoriteCards, setConfigCards])

  useEffect(() => {
    loadCards()
  }, [loadCards])

  if (loading) {
    return <LoadingCards />
  }

  if (configCards.length === 0) {
    return <NoCardsAvailable />
  }

  return (
    <CardList configCards={configCards} selectedAlphabet={selectedAlphabet} />
  )
}
