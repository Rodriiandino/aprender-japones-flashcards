'use client'
import { Button } from '@/components/ui/button'
import { useUiStore } from '@/store/learn-store'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SearchButton() {
  const { isSearchBarVisible, toggleSearchBar } = useUiStore()
  const handleSearch = () => {
    toggleSearchBar(!isSearchBarVisible)
  }

  return (
    <Button
      variant='ghost'
      className={cn('w-full h-full rounded-none', {
        'shadow-md shadow-primary/20': isSearchBarVisible
      })}
      onClick={handleSearch}
    >
      <Search size={24} />
    </Button>
  )
}
