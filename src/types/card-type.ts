import { AlphabetCategory } from './alphabet-type'

export type CharacterDetails = {
  hiragana: string
  katakana: string
  romaji: string | string[]
}

export type CharacterCard = {
  character: CharacterDetails
  type: AlphabetCategory
}

export type ChartData = {
  alphabet: string
  correct: number
  total: number
  correctPercentage: number
  studyMode: string
  date: string
  fill: string
}
