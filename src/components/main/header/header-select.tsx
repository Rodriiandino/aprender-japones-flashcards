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
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HeaderSelect() {
  const { selectedAlphabet, setSelectedAlphabet } = useConfigLearnStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleCharacterChange = (value: AlphabetCategory) => {
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('character')
    params.set('alphabet', value)
    const url = `${pathname}?${params.toString()}`
    replace(url)
    setSelectedAlphabet(value)
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    const alphabet = params.get('alphabet') as AlphabetCategory

    if (alphabet) {
      setSelectedAlphabet(alphabet)
    } else {
      params.set('alphabet', selectedAlphabet)
      const url = `${pathname}?${params.toString()}`
      replace(url)
    }
  }, [pathname, replace, searchParams, selectedAlphabet, setSelectedAlphabet])

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
