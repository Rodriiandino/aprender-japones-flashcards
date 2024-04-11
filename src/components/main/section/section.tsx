'use client'

import { useEffect } from 'react'
import CardSymbol from './card'
import { CharacterType, AllCharacters } from '@/data/characters'
import { useConfigLearnStore } from '@/store/learn-store'

export default function Section() {
  const { cards, setCards, setCardsToLearn, alphabet } = useConfigLearnStore()

  useEffect(() => {
    const charactersArray: CharacterType[] = []

    Object.keys(AllCharacters).forEach(key => {
      charactersArray.push(AllCharacters[key])
    })
    setCards(charactersArray)
    setCardsToLearn(charactersArray.length)
  }, [setCards, setCardsToLearn])

  return (
    <section className='w-full h-full md:flex md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2'>
      {cards.map((char, index) => (
        <CardSymbol key={index} character={char} primary={alphabet} />
      ))}
    </section>
  )
}
