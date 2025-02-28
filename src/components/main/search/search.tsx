'use client'
import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { useState, useMemo } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { AllCharacters } from '@/data/characters'
import CharacterLi from './character-li'
import { cn } from '@/lib/utils'
import { useUiStore } from '@/store/learn-store'
import CharacterSelector from './character-selector'

const characterArray = Object.values(AllCharacters)

export default function Search() {
  const t = useTranslations('MainComponent.search')
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
      <div className='relative w-full flex gap-2'>
        <CharacterSelector />
        <div className='relative flex-1'>
          <SearchIcon
            size='16px'
            className='absolute top-1/2 left-2 transform -translate-y-1/2 text-muted-foreground/70'
          />
          <Input
            type='text'
            className='pl-8 w-full h-[40px]'
            placeholder={t('placeholder')}
            value={search}
            onChange={handleSearch}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 100)}
          />
        </div>
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
                {t('noResults')}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
