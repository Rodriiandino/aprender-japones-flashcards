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

export default function HeaderSelect() {
  return (
    <Select>
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
