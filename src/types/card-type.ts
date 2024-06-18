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
