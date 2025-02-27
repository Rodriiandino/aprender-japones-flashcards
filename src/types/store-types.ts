import { CharacterDetails } from './card-type'
import { AlphabetCategory, StudyMode } from './alphabet-type'
import { CharacterCard } from './card-type'

export type LearnStoreState = {
  learningCards: CharacterDetails[] | CharacterCard[]
  setLearningCards: (cards: CharacterDetails[] | CharacterCard[]) => void
  totalCards: number
  setTotalCards: (count: number) => void
  correctAnswers: number
  setCorrectAnswers: (count: number) => void
  currentAlphabet: AlphabetCategory
  setCurrentAlphabet: (alphabet: AlphabetCategory) => void
  currentCardIndex: number
  setCurrentCardIndex: (index: number) => void
  practicedCardsIndices: number[]
  setPracticedCardsIndices: (indices: number[]) => void
  correctPercentage: number
  setCorrectPercentage: (percentage: number) => void
  studyMode: StudyMode
  setStudyMode: (mode: StudyMode) => void
  isLearning: boolean
  setIsLearning: (isLearned: boolean) => void
  isFinished: boolean
  setIsFinished: (isFinished: boolean) => void
}

export type FavoriteStoreState = {
  favoriteCards: CharacterCard[]
  setFavoriteCards: (cards: CharacterCard[]) => void
}

export type ConfigLearnStoreState = {
  configCards: CharacterDetails[] | CharacterCard[]
  setConfigCards: (cards: CharacterDetails[] | CharacterCard[]) => void
  selectedAlphabet: AlphabetCategory
  setSelectedAlphabet: (alphabet: AlphabetCategory) => void
  selectedStudyMode: StudyMode
  setSelectedStudyMode: (mode: StudyMode) => void
}

export type ModalStoreState = {
  isLearningModalOpen: boolean
  toggleLearningModal: (isOpen: boolean) => void
  isConfirmModalOpen: boolean
  toggleConfirmModal: (isOpen: boolean) => void
  isChangeLearnModalOpen: boolean
  toggleChangeLearnModal: (isOpen: boolean) => void
  isCardModal: boolean
  toggleCardModal: (isOpen: boolean) => void
  isAiModalOpen: boolean
  toggleAiModal: (isOpen: boolean) => void
  isHelpModalOpen: boolean
  toggleHelpModal: (isOpen: boolean) => void
}

export type UiStoreState = {
  isSearchBarVisible: boolean
  toggleSearchBar: (isVisible: boolean) => void
}

export type LearnHistoryItem = {
  total: number
  date: string
  correct: number
  studyMode: StudyMode
  correctPercentage: number
  alphabet: AlphabetCategory
}

export type LearnHistoryStoreState = {
  history: LearnHistoryItem[]
  addHistoryItem: (item: LearnHistoryItem) => void
  clearHistory: () => void
}

export type AiStoreState = {
  isAiActive: boolean
  toggleAi: (isActive: boolean) => void
  iaToken: string
  setIaToken: (token: string) => void
  aiProvider: 'openai' | 'groq'
  setAiProvider: (provider: 'openai' | 'groq') => void
}

export type AiHintStoreState = {
  aiHint: string
  setAiHint: (hint: string) => void
}

export type CardVisibility = {
  romaji: boolean
  counterpart: boolean
}

export type CustomizationStoreState = {
  selectedFont: 'noto' | 'kosugi' | 'zen' | 'yuji' | 'mochiy' | 'shippori'
  setSelectedFont: (
    font: 'noto' | 'kosugi' | 'zen' | 'yuji' | 'mochiy' | 'shippori'
  ) => void
  cardVisibility: CardVisibility
  setCardVisibility: (visibility: CardVisibility) => void
}
