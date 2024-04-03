import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { alphabetType } from '@/types/alphabetType'

type learnStoreType = {
  alphabet: alphabetType
  setAlphabet: (alphabet: alphabetType) => void
}

export const useAlphabet = create<learnStoreType>(
  persist(
    set => ({
      alphabet: 'hiragana',
      setAlphabet: (alphabet: alphabetType) => set({ alphabet })
    }),
    {
      name: 'alphabet-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
