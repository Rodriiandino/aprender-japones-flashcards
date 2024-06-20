'use client'

import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { useConfigLearnStore } from '@/store/learn-store'
import { cn } from '@/lib/utils'

export default function FavoriteButton() {
  const { alphabet, setAlphabet } = useConfigLearnStore()

  const handleFavorite = () => {
    if (alphabet !== 'favorite') setAlphabet('favorite')
    if (alphabet === 'favorite') setAlphabet('hiragana')
  }

  return (
    <Button
      variant='ghost'
      className={cn('w-full h-full rounded-none', {
        'text-red hover:text-red': alphabet === 'favorite'
      })}
      onClick={handleFavorite}
    >
      <Heart size={24} />
    </Button>
  )
}
