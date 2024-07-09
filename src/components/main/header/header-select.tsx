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

export default function HeaderSelect() {
  const { selectedAlphabet, setSelectedAlphabet } = useConfigLearnStore()

  return (
    <Select value={selectedAlphabet} onValueChange={setSelectedAlphabet}>
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
