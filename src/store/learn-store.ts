import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  ConfigLearnStoreState,
  FavoriteStoreState,
  LearnStoreState,
  ModalStoreState,
  UiStoreState
} from '@/types/store-types'

export const useLearnStore = create<LearnStoreState>()(
  persist(
    set => ({
      learningCards: [],
      setLearningCards: cards => set({ learningCards: cards }),
      totalCards: 0,
      setTotalCards: count => set({ totalCards: count }),
      correctAnswers: 0,
      setCorrectAnswers: count => set({ correctAnswers: count }),
      currentAlphabet: 'hiragana',
      setCurrentAlphabet: alphabet => set({ currentAlphabet: alphabet }),
      currentCardIndex: 0,
      setCurrentCardIndex: index => set({ currentCardIndex: index }),
      practicedCardsIndices: [],
      setPracticedCardsIndices: indices =>
        set({ practicedCardsIndices: indices }),
      correctPercentage: 0,
      setCorrectPercentage: percentage =>
        set({ correctPercentage: percentage }),
      studyMode: 'order',
      setStudyMode: mode => set({ studyMode: mode }),
      isLearning: false,
      setIsLearning: isLearned => set({ isLearning: isLearned }),
      isFinished: false,
      setIsFinished: isFinished => set({ isFinished: isFinished })
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
      configCards: [],
      setConfigCards: configCards => set({ configCards }),
      selectedAlphabet: 'hiragana',
      setSelectedAlphabet: selectedAlphabet => set({ selectedAlphabet }),
      selectedStudyMode: 'order',
      setSelectedStudyMode: selectedStudyMode => set({ selectedStudyMode })
    }),
    {
      name: 'config-learn-storage'
    }
  )
)

export const useModalStore = create<ModalStoreState>()(set => ({
  isLearningModalOpen: false,
  toggleLearningModal: isOpen => set({ isLearningModalOpen: isOpen }),
  isConfirmModalOpen: false,
  toggleConfirmModal: isOpen => set({ isConfirmModalOpen: isOpen }),
  isChangeLearnModalOpen: false,
  toggleChangeLearnModal: isOpen => set({ isChangeLearnModalOpen: isOpen }),
  isCardModal: false,
  toggleCardModal: isOpen => set({ isCardModal: isOpen })
}))

export const useUiStore = create<UiStoreState>()(
  persist(
    set => ({
      isSearchBarVisible: true,
      toggleSearchBar: isVisible => set({ isSearchBarVisible: isVisible })
    }),
    {
      name: 'ui-storage'
    }
  )
)
