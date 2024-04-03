'use client'

import { useEffect, useState } from 'react'
import CardSymbol from './card'
import {
  AllCharactersType,
  AllHiraganaCharacters,
  AllKatakanaCharacters
} from '@/data/characters'
import { useAlphabet } from '@/store/learn-store'

export default function Section() {
  const alphabet = useAlphabet(state => state.alphabet)

  const [characters, setCharacters] = useState<AllCharactersType>(
    alphabet ? AllHiraganaCharacters : AllKatakanaCharacters
  )

  useEffect(() => {
    setCharacters(
      alphabet === 'hiragana' ? AllHiraganaCharacters : AllKatakanaCharacters
    )
  }, [alphabet])

  return (
    <section className='w-full h-full flex flex-wrap sm:gap-3 gap-1 overflow-y-auto overflow-x-hidden'>
      {characters &&
        Object.entries(characters).map(([key, value]) => (
          <CardSymbol key={key} symbol={value} reading={key} />
        ))}
    </section>
  )
}
