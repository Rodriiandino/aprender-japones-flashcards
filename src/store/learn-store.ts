import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  AiHintStoreState,
  AiStoreState,
  ConfigLearnStoreState,
  FavoriteStoreState,
  LearnHistoryStoreState,
  LearnStoreState,
  ModalStoreState,
  UiStoreState,
  CustomizationStoreState,
  CharacterSelectionState,
  CharacterGroup
} from '@/types/store-types'
import { AllCharactersGroup, AllCharacters } from '@/data/characters'
import { AlphabetCategory } from '@/types/alphabet-type'
import { CharacterDetails } from '@/types/card-type'

const initializeCharacterGroups = () => {
  const hiraganaGroups: { [groupKey: string]: CharacterGroup } = {}
  const katakanaGroups: { [groupKey: string]: CharacterGroup } = {}

  Object.entries(AllCharactersGroup).forEach(([mainGroupKey, mainGroup]) => {
    Object.entries(mainGroup).forEach(([groupKey, group]) => {
      const groupName =
        groupKey === 'vowels'
          ? 'Vocales'
          : groupKey === 'k'
          ? 'K'
          : groupKey === 's'
          ? 'S'
          : groupKey === 't'
          ? 'T'
          : groupKey === 'n'
          ? 'N'
          : groupKey === 'h'
          ? 'H'
          : groupKey === 'm'
          ? 'M'
          : groupKey === 'y'
          ? 'Y'
          : groupKey === 'r'
          ? 'R'
          : groupKey === 'w'
          ? 'W'
          : groupKey === 'special'
          ? 'Especial'
          : groupKey === 'g'
          ? 'G'
          : groupKey === 'z'
          ? 'Z'
          : groupKey === 'd'
          ? 'D'
          : groupKey === 'b'
          ? 'B'
          : groupKey === 'p'
          ? 'P'
          : groupKey === 'k_special'
          ? 'KY'
          : groupKey === 's_special'
          ? 'SY'
          : groupKey === 't_special'
          ? 'TY'
          : groupKey === 'n_special'
          ? 'NY'
          : groupKey === 'h_special'
          ? 'HY'
          : groupKey === 'm_special'
          ? 'MY'
          : groupKey === 'r_special'
          ? 'RY'
          : groupKey === 'g_special'
          ? 'GY'
          : groupKey === 'z_special'
          ? 'ZY'
          : groupKey === 'b_special'
          ? 'BY'
          : groupKey === 'p_special'
          ? 'PY'
          : groupKey === 'd_special'
          ? 'DY'
          : groupKey

      const hiraganaGroup: CharacterGroup = {
        name: groupName,
        selected: true,
        characters: {}
      }

      const katakanaGroup: CharacterGroup = {
        name: groupName,
        selected: true,
        characters: {}
      }

      Object.keys(group).forEach(charKey => {
        hiraganaGroup.characters[charKey] = true
        katakanaGroup.characters[charKey] = true
      })

      const formattedGroupKey =
        mainGroupKey === 'voicedConsonants'
          ? groupKey
          : `${mainGroupKey}_${groupKey}`

      hiraganaGroups[formattedGroupKey] = hiraganaGroup
      katakanaGroups[formattedGroupKey] = katakanaGroup
    })
  })

  return { hiraganaGroups, katakanaGroups }
}

const findSelectedCharacters = (
  alphabet: AlphabetCategory,
  groups: Record<string, CharacterGroup>
): CharacterDetails[] => {
  return Object.entries(AllCharacters)
    .filter(([charKey, char]) => {
      for (const [groupKey, group] of Object.entries(groups)) {
        if (charKey in group.characters) {
          return group.characters[charKey]
        }
      }
      return false
    })
    .map(([_, char]) => char)
}

export const useCharacterSelectionStore = create<CharacterSelectionState>()(
  persist(
    (set, get) => {
      const { hiraganaGroups, katakanaGroups } = initializeCharacterGroups()

      return {
        hiraganaGroups,
        katakanaGroups,

        setGroupSelection: (
          alphabet: AlphabetCategory,
          groupKey: string,
          selected: boolean
        ) => {
          set(state => {
            const newGroups =
              alphabet === 'hiragana'
                ? JSON.parse(JSON.stringify(state.hiraganaGroups))
                : JSON.parse(JSON.stringify(state.katakanaGroups))

            if (!newGroups[groupKey]) return state

            newGroups[groupKey].selected = selected

            Object.keys(newGroups[groupKey].characters).forEach(charKey => {
              newGroups[groupKey].characters[charKey] = selected
            })

            return alphabet === 'hiragana'
              ? { hiraganaGroups: newGroups }
              : { katakanaGroups: newGroups }
          })
        },

        setCharacterSelection: (
          alphabet: AlphabetCategory,
          groupKey: string,
          charKey: string,
          selected: boolean
        ) => {
          set(state => {
            const newGroups =
              alphabet === 'hiragana'
                ? JSON.parse(JSON.stringify(state.hiraganaGroups))
                : JSON.parse(JSON.stringify(state.katakanaGroups))

            if (
              !newGroups[groupKey] ||
              !(charKey in newGroups[groupKey].characters)
            )
              return state

            newGroups[groupKey].characters[charKey] = selected

            const allSelected = Object.values(
              newGroups[groupKey].characters
            ).every(value => value === true)

            newGroups[groupKey].selected = allSelected

            return alphabet === 'hiragana'
              ? { hiraganaGroups: newGroups }
              : { katakanaGroups: newGroups }
          })
        },

        resetSelections: () => {
          const { hiraganaGroups, katakanaGroups } = initializeCharacterGroups()
          set({ hiraganaGroups, katakanaGroups })
        },

        getSelectedCharacters: (alphabet: AlphabetCategory) => {
          const state = get()
          const groups =
            alphabet === 'hiragana'
              ? state.hiraganaGroups
              : state.katakanaGroups

          return findSelectedCharacters(alphabet, groups)
        }
      }
    },
    {
      name: 'character-selection-storage'
    }
  )
)

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
  toggleCardModal: isOpen => set({ isCardModal: isOpen }),
  isAiModalOpen: false,
  toggleAiModal: isOpen => set({ isAiModalOpen: isOpen }),
  isHelpModalOpen: false,
  toggleHelpModal: isOpen => set({ isHelpModalOpen: isOpen })
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

export const useLearnHistoryStore = create<LearnHistoryStoreState>()(
  persist(
    set => ({
      history: [],
      addHistoryItem: item =>
        set(state => ({ history: [...state.history, item] })),
      clearHistory: () => set({ history: [] })
    }),
    {
      name: 'learn-history-storage'
    }
  )
)

export const useAiStore = create<AiStoreState>()(set => ({
  isAiActive: false,
  toggleAi: isActive => set({ isAiActive: isActive }),
  iaToken: '',
  setIaToken: token => set({ iaToken: token }),
  aiProvider: 'openai',
  setAiProvider: provider => set({ aiProvider: provider })
}))

export const useAiHintStore = create<AiHintStoreState>()(set => ({
  aiHint: '',
  setAiHint: hint => set({ aiHint: hint })
}))

export const useCustomizationStore = create<CustomizationStoreState>()(
  persist(
    set => ({
      selectedFont: 'noto',
      setSelectedFont: font => set({ selectedFont: font }),
      cardVisibility: {
        romaji: true,
        counterpart: true
      },
      setCardVisibility: visibility => set({ cardVisibility: visibility })
    }),
    {
      name: 'customization-storage'
    }
  )
)
