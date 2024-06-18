'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { useConfigLearnStore } from '@/store/learn-store'
import { AlphabetCategory } from '@/types/alphabet-type'

export default function HeaderSelect() {
  const { alphabet, setAlphabet } = useConfigLearnStore()

  const handleCharacterChange = (value: AlphabetCategory) => {
    setAlphabet(value)
  }

  return (
    <Select value={alphabet} onValueChange={handleCharacterChange}>
      <SelectTrigger className='w-full h-14 hover:bg-accent'>
        <SelectValue placeholder='Selecciona un alfabetos' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo de Letras</SelectLabel>
          <SelectItem value='hiragana'>Hiragana</SelectItem>
          <SelectItem value='katakana'>Katakana</SelectItem>
          {/* <SelectItem value='kanji'>Kanji</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
