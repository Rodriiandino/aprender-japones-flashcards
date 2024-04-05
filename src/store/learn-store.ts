import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { alphabetType } from '@/types/alphabetType'
import { CharacterType } from '@/data/characters'

type alphabetStoreType = {
  alphabet: alphabetType
  setAlphabet: (alphabet: alphabetType) => void
}

export const useAlphabet = create<alphabetStoreType>(
  persist(
    set => ({
      alphabet: 'hiragana',
      setAlphabet: (alphabet: alphabetType) => set({ alphabet })
    }),
    {
      name: 'alphabet-storage'
    }
  )
)

type learnStoreType = {
  cards: CharacterType[]
  setCards: (cards: CharacterType[]) => void
  cardsToLearn: number
  setCardsToLearn: (cardsToLearn: number) => void
  cardsCorrect: number
  setCardsCorrect: (cardsCorrect: number) => void
}

export const useLearnStore = create<learnStoreType>(set => ({
  cards: [],
  setCards: (cards: CharacterType[]) => set({ cards }),
  cardsToLearn: 0,
  setCardsToLearn: (cardsToLearn: number) => set({ cardsToLearn }),
  cardsCorrect: 0,
  setCardsCorrect: (cardsCorrect: number) => set({ cardsCorrect })
}))

type modalStoreType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useModalStore = create<modalStoreType>(set => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen })
}))
