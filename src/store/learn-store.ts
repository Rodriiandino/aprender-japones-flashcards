import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { alphabetType } from '@/types/alphabetType'
import { CharacterType } from '@/data/characters'

type learnStoreType = {
  learningCards: CharacterType[]
  setCards: (learningCards: CharacterType[]) => void
  learningCardsToLearn: number
  setCardsToLearn: (learningCardsToLearn: number) => void
  cardsCorrect: number
  setCardsCorrect: (cardsCorrect: number) => void
  learningAlphabet: alphabetType
  setAlphabet: (learningAlphabet: alphabetType) => void

  currentCard: number
  setCurrentCard: (currentCard: number) => void
  isLearned: boolean
  setIsLearned: (isLearned: boolean) => void
}

export const useLearnStore = create<learnStoreType>(
  persist(
    set => ({
      learningCards: [],
      setCards: (learningCards: CharacterType[]) => set({ learningCards }),
      learningCardsToLearn: 0,
      setCardsToLearn: (learningCardsToLearn: number) =>
        set({ learningCardsToLearn }),
      cardsCorrect: 0,
      setCardsCorrect: (cardsCorrect: number) => set({ cardsCorrect }),
      learningAlphabet: 'hiragana',
      setAlphabet: (learningAlphabet: alphabetType) =>
        set({ learningAlphabet }),
      currentCard: 0,
      setCurrentCard: (currentCard: number) => set({ currentCard }),
      isLearned: false,
      setIsLearned: (isLearned: boolean) => set({ isLearned })
    }),
    {
      name: 'learn-storage'
    }
  )
)

type configLearnStoreType = {
  cards: CharacterType[]
  setCards: (cards: CharacterType[]) => void
  cardsToLearn: number
  setCardsToLearn: (cardsToLearn: number) => void
  alphabet: alphabetType
  setAlphabet: (alphabet: alphabetType) => void
}

export const useConfigLearnStore = create<configLearnStoreType>(set => ({
  cards: [],
  setCards: (cards: CharacterType[]) => set({ cards }),
  cardsToLearn: 0,
  setCardsToLearn: (cardsToLearn: number) => set({ cardsToLearn }),
  alphabet: 'hiragana',
  setAlphabet: (alphabet: alphabetType) => set({ alphabet })
}))

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