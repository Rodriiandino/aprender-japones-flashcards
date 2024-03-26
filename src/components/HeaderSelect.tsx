import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useStore } from '@nanostores/react'
import { alphabetType } from '@/store/learnStore'

export default function HeaderSelect() {
  const config = useStore(alphabetType)

  const handleCharacterChange = (value: string) => {
    alphabetType.set(value as 'hiragana' | 'katakana')
  }

  return (
    <Select defaultValue={config} onValueChange={handleCharacterChange}>
      <SelectTrigger className='w-full h-14'>
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
