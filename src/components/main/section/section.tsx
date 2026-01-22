'use client'

import { useEffect, useState } from 'react'
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
  const configCards = useConfigLearnStore(state => state.configCards)
  const setConfigCards = useConfigLearnStore(state => state.setConfigCards)
  const selectedAlphabet = useConfigLearnStore(state => state.selectedAlphabet)

  const favoriteCards = useFavoriteStore(state => state.favoriteCards)

  const getSelectedCharacters = useCharacterSelectionStore(
    state => state.getSelectedCharacters
  )
  const hiraganaGroups = useCharacterSelectionStore(
    state => state.hiraganaGroups
  )
  const katakanaGroups = useCharacterSelectionStore(
    state => state.katakanaGroups
  )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
  }, [
    selectedAlphabet,
    favoriteCards,
    getSelectedCharacters,
    setConfigCards,
    hiraganaGroups,
    katakanaGroups
  ])

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
