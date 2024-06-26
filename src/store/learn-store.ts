import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { alphabetType, howToStudyType } from '@/types/alphabetType'
import { CharacterType } from '@/data/characters'

type learnStoreType = {
  learningCards: CharacterType[]
  setCards: (learningCards: CharacterType[]) => void
  cardsLength: number
  setCardsLength: (cardsLength: number) => void
  cardsCorrect: number
  setCardsCorrect: (cardsCorrect: number) => void
  learningAlphabet: alphabetType
  setAlphabet: (learningAlphabet: alphabetType) => void
  currentCard: number
  setCurrentCard: (currentCard: number) => void
  cardsAlreadyPracticed: number[]
  setCardsAlreadyPracticed: (cardsAlreadyPracticed: number[]) => void
  percentCorrect: number
  setPercentCorrect: (percentCorrect: number) => void
  howToStudy: howToStudyType
  setHowToStudy: (howToStudy: howToStudyType) => void
  isLearned: boolean
  setIsLearned: (isLearned: boolean) => void
}

export const useLearnStore = create<learnStoreType>(
  persist(
    set => ({
      learningCards: [],
      setCards: (learningCards: CharacterType[]) => set({ learningCards }),
      cardsLength: 0,
      setCardsLength: (cardsLength: number) => set({ cardsLength }),
      cardsCorrect: 0,
      setCardsCorrect: (cardsCorrect: number) => set({ cardsCorrect }),
      learningAlphabet: 'hiragana',
      setAlphabet: (learningAlphabet: alphabetType) =>
        set({ learningAlphabet }),
      currentCard: 0,
      setCurrentCard: (currentCard: number) => set({ currentCard }),
      cardsAlreadyPracticed: [],
      setCardsAlreadyPracticed: (cardsAlreadyPracticed: number[]) =>
        set({ cardsAlreadyPracticed }),
      percentCorrect: 0,
      setPercentCorrect: (percentCorrect: number) => set({ percentCorrect }),
      howToStudy: 'order',
      setHowToStudy: (howToStudy: howToStudyType) => set({ howToStudy }),
      isLearned: false,
      setIsLearned: (isLearned: boolean) => set({ isLearned })
    }),
    {
      name: 'learn-storage'
    }
  ) as any
)

type configLearnStoreType = {
  cards: CharacterType[]
  setCards: (cards: CharacterType[]) => void
  alphabet: alphabetType
  setAlphabet: (alphabet: alphabetType) => void
  howToStudy: howToStudyType
  setHowToStudy: (howToStudy: howToStudyType) => void
}

export const useConfigLearnStore = create<configLearnStoreType>(
  persist(
    set => ({
      cards: [],
      setCards: (cards: CharacterType[]) => set({ cards }),
      alphabet: 'hiragana',
      setAlphabet: (alphabet: alphabetType) => set({ alphabet }),
      howToStudy: 'order',
      setHowToStudy: (howToStudy: howToStudyType) => set({ howToStudy })
    }),
    {
      name: 'config-learn-storage'
    }
  ) as any
)

type modalStoreType = {
  learningModal: boolean
  setLearningModal: (learningModal: boolean) => void
  confirmModal: boolean
  setConfirmModal: (confirmModal: boolean) => void
  changeLearnModal: boolean
  setChangeLearnModal: (changeLearnModal: boolean) => void
}

export const useModalStore = create<modalStoreType>(set => ({
  learningModal: false,
  setLearningModal: (learningModal: boolean) => set({ learningModal }),
  confirmModal: false,
  setConfirmModal: (confirmModal: boolean) => set({ confirmModal }),
  changeLearnModal: false,
  setChangeLearnModal: (changeLearnModal: boolean) => set({ changeLearnModal })
}))
