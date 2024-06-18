'use client'

import { useEffect } from 'react'
import CardSymbol from './card'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore } from '@/store/learn-store'
import { CharacterDetails } from '@/types/card-type'

export default function Section() {
  const { cards, setCards, alphabet } = useConfigLearnStore()

  useEffect(() => {
    const charactersArray: CharacterDetails[] = Object.values(AllCharacters)
    setCards(charactersArray)
  }, [setCards])

  return (
    <section className='w-full h-full md:flex md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2'>
      {cards.map((char, index) => (
        <CardSymbol key={index} character={char} primary={alphabet} />
      ))}
    </section>
  )
}
