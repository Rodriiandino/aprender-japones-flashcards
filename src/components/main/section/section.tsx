'use client'

import { useEffect } from 'react'
import CardSymbol from './card'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore, useFavoriteStore } from '@/store/learn-store'
import { CharacterDetails } from '@/types/card-type'
import { cn } from '@/lib/utils'

export default function Section() {
  const { cards, setCards, alphabet } = useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()

  useEffect(() => {
    if (alphabet === 'favorite') {
      setCards(favoriteCards)
      return
    }

    const charactersArray: CharacterDetails[] = Object.values(AllCharacters)
    setCards(charactersArray)
  }, [alphabet, favoriteCards, setCards])

  return (
    <section
      className={cn('w-full h-full', {
        'md:flex md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2':
          cards.length > 0,
        'flex justify-center items-center': cards.length === 0
      })}
    >
      {cards.map((char, index) => (
        <CardSymbol key={index} character={char} category={alphabet} />
      ))}

      {cards.length === 0 && (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='text-xl sm:text-2xl text-center text-gray-500'>
            No Flashcards to Learn
          </p>
        </div>
      )}
    </section>
  )
}
