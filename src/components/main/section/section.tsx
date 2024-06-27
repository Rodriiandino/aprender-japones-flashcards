'use client'

import { useEffect, useState } from 'react'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore, useFavoriteStore } from '@/store/learn-store'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import CardList from './card-list'
import NoCardsAvailable from './no-cards-available'
import LoadingCards from './loading-cards'

export default function Section() {
  const { configCards, setConfigCards, selectedAlphabet } =
    useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCards = () => {
      if (selectedAlphabet === 'favorite') {
        setConfigCards(favoriteCards)
      } else if (selectedAlphabet === 'hiragana+katakana') {
        const charactersArray: CharacterCard[] = Object.values(
          AllCharacters
        ).flatMap(char => [
          { character: char, type: 'hiragana' },
          { character: char, type: 'katakana' }
        ])
        setConfigCards(charactersArray)
      } else {
        const charactersArray: CharacterDetails[] = Object.values(AllCharacters)
        setConfigCards(charactersArray)
      }
      setLoading(false)
    }
    loadCards()
  }, [selectedAlphabet, favoriteCards, setConfigCards])

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
