'use client'

import { useEffect } from 'react'
import CardSymbol from './card'
import { AllCharacters } from '@/data/characters'
import { useConfigLearnStore, useFavoriteStore } from '@/store/learn-store'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { cn } from '@/lib/utils'

export default function Section() {
  const { configCards, setConfigCards, selectedAlphabet } =
    useConfigLearnStore()
  const { favoriteCards } = useFavoriteStore()

  useEffect(() => {
    if (selectedAlphabet === 'favorite') {
      setConfigCards(favoriteCards)
      return
    }

    if (selectedAlphabet === 'hiragana+katakana') {
      let charactersArray: CharacterCard[]

      charactersArray = Object.values(AllCharacters).flatMap(char => {
        return [
          {
            character: char,
            type: 'hiragana'
          },
          {
            character: char,
            type: 'katakana'
          }
        ]
      })

      setConfigCards(charactersArray)
      return
    }

    const charactersArray: CharacterDetails[] = Object.values(AllCharacters)
    setConfigCards(charactersArray)
  }, [selectedAlphabet, favoriteCards, setConfigCards])

  return (
    <section
      className={cn('w-full h-full', {
        'md:flex content-start md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2':
          configCards.length > 0,
        'flex justify-start items-start': configCards.length === 0
      })}
    >
      {configCards.map((char, index) => (
        <CardSymbol key={index} character={char} category={selectedAlphabet} />
      ))}

      {configCards.length === 0 && (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='text-xl sm:text-2xl text-center text-gray-500'>
            No Flashcards to Learn
          </p>
        </div>
      )}
    </section>
  )
}
