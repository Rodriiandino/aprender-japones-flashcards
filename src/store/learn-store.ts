import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  ConfigLearnStoreState,
  FavoriteStoreState,
  LearnStoreState,
  ModalStoreState
} from '@/types/store-types'

export const useLearnStore = create<LearnStoreState>()(
  persist(
    set => ({
      learningCards: [],
      setCards: learningCards => set({ learningCards }),
      cardsLength: 0,
      setCardsLength: cardsLength => set({ cardsLength }),
      cardsCorrect: 0,
      setCardsCorrect: cardsCorrect => set({ cardsCorrect }),
      learningAlphabet: 'hiragana',
      setAlphabet: learningAlphabet => set({ learningAlphabet }),
      currentCard: 0,
      setCurrentCard: currentCard => set({ currentCard }),
      cardsAlreadyPracticed: [],
      setCardsAlreadyPracticed: cardsAlreadyPracticed =>
        set({ cardsAlreadyPracticed }),
      percentCorrect: 0,
      setPercentCorrect: percentCorrect => set({ percentCorrect }),
      howToStudy: 'order',
      setHowToStudy: howToStudy => set({ howToStudy }),
      isLearned: false,
      setIsLearned: isLearned => set({ isLearned })
    }),
    {
      name: 'learn-storage'
    }
  )
)

export const useFavoriteStore = create<FavoriteStoreState>()(
  persist(
    set => ({
      favoriteCards: [],
      setFavoriteCards: cards => set({ favoriteCards: cards })
    }),
    {
      name: 'favorite-storage'
    }
  )
)

export const useConfigLearnStore = create<ConfigLearnStoreState>()(
  persist(
    set => ({
      cards: [],
      setCards: cards => set({ cards }),
      alphabet: 'hiragana',
      setAlphabet: alphabet => set({ alphabet }),
      howToStudy: 'order',
      setHowToStudy: howToStudy => set({ howToStudy })
    }),
    {
      name: 'config-learn-storage'
    }
  )
)

export const useModalStore = create<ModalStoreState>()(set => ({
  learningModal: false,
  setLearningModal: learningModal => set({ learningModal }),
  confirmModal: false,
  setConfirmModal: confirmModal => set({ confirmModal }),
  changeLearnModal: false,
  setChangeLearnModal: changeLearnModal => set({ changeLearnModal })
}))
