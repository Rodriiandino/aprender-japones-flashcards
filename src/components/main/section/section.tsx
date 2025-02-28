'use client'

import { useCallback, useEffect, useState } from 'react'
import { AllCharacters } from '@/data/characters'
import {
  useConfigLearnStore,
  useFavoriteStore,
  useCharacterSelectionStore
} from '@/store/learn-store'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import CardList from './card-list'
import NoCardsAvailable from './no-cards-available'
import LoadingCards from './loading-cards'

const getHiraganaAndKatakanaCards = (
  hiraganaCharacters: CharacterDetails[],
  katakanaCharacters: CharacterDetails[]
): CharacterCard[] => {
  const cards: CharacterCard[] = []

  hiraganaCharacters.forEach(char => {
    cards.push({ character: char, type: 'hiragana' })
  })

  katakanaCharacters.forEach(char => {
    cards.push({ character: char, type: 'katakana' })
  })

  return cards
}

const getConfigCards = (
  selectedAlphabet: string,
  favoriteCards: CharacterCard[],
  hiraganaSelectedCharacters: CharacterDetails[],
  katakanaSelectedCharacters: CharacterDetails[]
): CharacterCard[] | CharacterDetails[] => {
  switch (selectedAlphabet) {
    case 'favorite':
      return favoriteCards
    case 'hiragana+katakana':
      return getHiraganaAndKatakanaCards(
        hiraganaSelectedCharacters,
        katakanaSelectedCharacters
      )
    case 'hiragana':
      return hiraganaSelectedCharacters
    case 'katakana':
      return katakanaSelectedCharacters
    default:
      return Object.values(AllCharacters)
  }
}

export default function Section() {
  const { configCards, setConfigCards, selectedAlphabet } =
    useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()
  const { getSelectedCharacters } = useCharacterSelectionStore()
  const [loading, setLoading] = useState(true)

  const loadCards = useCallback(() => {
    const hiraganaSelectedCharacters = getSelectedCharacters('hiragana')
    const katakanaSelectedCharacters = getSelectedCharacters('katakana')

    setConfigCards(
      getConfigCards(
        selectedAlphabet,
        favoriteCards,
        hiraganaSelectedCharacters,
        katakanaSelectedCharacters
      )
    )
    setLoading(false)
  }, [selectedAlphabet, favoriteCards, getSelectedCharacters, setConfigCards])

  useEffect(() => {
    loadCards()
  }, [loadCards])

  useEffect(() => {
    const reloadCards = () => {
      loadCards()
    }

    const unsubscribe = useCharacterSelectionStore.subscribe(reloadCards)

    return () => {
      unsubscribe()
    }
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
