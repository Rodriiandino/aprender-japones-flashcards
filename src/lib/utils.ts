import { AlphabetCategory } from '@/types/alphabet-type'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const generateRandomNumberExcluded = (
  max: number,
  excludedNumbers: number[]
): number => {
  let randomNumber: number

  do {
    randomNumber = generateRandomNumber(max)
  } while (excludedNumbers.includes(randomNumber))

  return randomNumber
}

export function getCharacterDetails(
  character: CharacterDetails | CharacterCard | null
): CharacterDetails {
  if (!character) return { hiragana: '', katakana: '', romaji: '' }
  if ('character' in character) return character.character
  return character
}

export function getEffectiveCategory(
  character: CharacterDetails | CharacterCard,
  category: AlphabetCategory
): AlphabetCategory {
  if ('type' in character) return character.type
  return category
}

export const getFirstRomaji = (romaji: string | string[]) => {
  return typeof romaji === 'string' ? romaji : romaji[0]
}

export const formatRomaji = (romaji: string | string[]) => {
  return typeof romaji === 'string' ? romaji : romaji.join(', ')
}

export const formatDate = (date: string | number | Date) => {
  const d = new Date(date)

  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = String(d.getFullYear()).slice(-2)
  return `${day}/${month}/${year}`
}
