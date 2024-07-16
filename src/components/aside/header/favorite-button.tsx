'use client'

import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { useConfigLearnStore } from '@/store/learn-store'
import { cn } from '@/lib/utils'

export default function FavoriteButton() {
  const { selectedAlphabet, setSelectedAlphabet } = useConfigLearnStore()

  const handleFavorite = () => {
    if (selectedAlphabet !== 'favorite') setSelectedAlphabet('favorite')
    if (selectedAlphabet === 'favorite') setSelectedAlphabet('hiragana')
  }

  return (
    <Button
      variant='ghost'
      className={cn('w-full h-full rounded-none', {
        'shadow-md shadow-primary/20': selectedAlphabet === 'favorite'
      })}
      onClick={handleFavorite}
    >
      <Heart size={24} />
    </Button>
  )
}
