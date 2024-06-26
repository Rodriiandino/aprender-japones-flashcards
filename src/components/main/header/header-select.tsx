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
  const { selectedAlphabet, setSelectedAlphabet } = useConfigLearnStore()

  const handleCharacterChange = (value: AlphabetCategory) => {
    setSelectedAlphabet(value)
  }

  return (
    <Select value={selectedAlphabet} onValueChange={handleCharacterChange}>
      <SelectTrigger className='w-full h-14 hover:bg-accent'>
        <SelectValue placeholder='Selecciona un alfabetos' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo de Letras</SelectLabel>
          <SelectItem value='hiragana+katakana'>Hiragana + Katakana</SelectItem>
          <SelectItem value='hiragana'>Hiragana</SelectItem>
          <SelectItem value='katakana'>Katakana</SelectItem>
          <SelectItem value='favorite'>Favorite</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
