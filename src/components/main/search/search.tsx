'use client'

import { Input } from '@/components/ui/input'
import { useState, useMemo } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { AllCharacters } from '@/data/characters'
import CharacterLi from './character-li'
import { cn } from '@/lib/utils'
import { useUiStore } from '@/store/learn-store'

const characterArray = Object.values(AllCharacters)

export default function Search() {
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)
  const { isSearchBarVisible } = useUiStore()

  const filteredCharacters = useMemo(() => {
    if (search === '') {
      return characterArray
    }

    const searchTerm = search.toLowerCase()
    return characterArray.filter(
      ({ hiragana, katakana, romaji }) =>
        hiragana.includes(searchTerm) ||
        katakana.includes(searchTerm) ||
        romaji.includes(searchTerm)
    )
  }, [search])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div
      className={cn('w-full relative', {
        hidden: !isSearchBarVisible
      })}
    >
      <div className='relative w-full'>
        <div>
          <SearchIcon
            size='16px'
            className='absolute top-1/2 left-2 transform -translate-y-1/2 text-muted-foreground/70'
          />
        </div>
        <Input
          type='text'
          className='pl-8 w-full'
          placeholder='Search for a character'
          value={search}
          onChange={handleSearch}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 100)}
        />
      </div>
      {showResults && (
        <div className='absolute top-10 w-full max-h-56 overflow-y-auto overflow-x-hidden z-50 bg-background p-3 border border-border rounded-md animate-fade-in-down duration-150'>
          <ul>
            {filteredCharacters.length > 0 ? (
              filteredCharacters.map((character, index) => (
                <CharacterLi key={index} character={character} index={index} />
              ))
            ) : (
              <li className='text-sm text-muted-foreground'>
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
