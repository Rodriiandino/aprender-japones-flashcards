import { CharacterDetails } from './card-type'
import { AlphabetCategory, StudyMode } from './alphabet-type'
import { CharacterCard } from './card-type'

export type LearnStoreState = {
  learningCards: CharacterDetails[] | CharacterCard[]
  setCards: (learningCards: CharacterDetails[] | CharacterCard[]) => void
  cardsLength: number
  setCardsLength: (cardsLength: number) => void
  cardsCorrect: number
  setCardsCorrect: (cardsCorrect: number) => void
  learningAlphabet: AlphabetCategory
  setAlphabet: (learningAlphabet: AlphabetCategory) => void
  currentCard: number
  setCurrentCard: (currentCard: number) => void
  cardsAlreadyPracticed: number[]
  setCardsAlreadyPracticed: (cardsAlreadyPracticed: number[]) => void
  percentCorrect: number
  setPercentCorrect: (percentCorrect: number) => void
  howToStudy: StudyMode
  setHowToStudy: (howToStudy: StudyMode) => void
  isLearned: boolean
  setIsLearned: (isLearned: boolean) => void
}

export type FavoriteStoreState = {
  favoriteCards: CharacterCard[]
  setFavoriteCards: (cards: CharacterCard[]) => void
}

export type ConfigLearnStoreState = {
  cards: CharacterDetails[] | CharacterCard[]
  setCards: (cards: CharacterDetails[] | CharacterCard[]) => void
  alphabet: AlphabetCategory
  setAlphabet: (alphabet: AlphabetCategory) => void
  howToStudy: StudyMode
  setHowToStudy: (howToStudy: StudyMode) => void
}

export type ModalStoreState = {
  learningModal: boolean
  setLearningModal: (learningModal: boolean) => void
  confirmModal: boolean
  setConfirmModal: (confirmModal: boolean) => void
  changeLearnModal: boolean
  setChangeLearnModal: (changeLearnModal: boolean) => void
}
