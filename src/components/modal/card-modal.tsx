'use client'

import { useEffect, useState, useCallback, useMemo, Suspense } from 'react'
import { useModalStore } from '@/store/learn-store'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import { CharacterDetails } from '@/types/card-type'
import { AllCharacters } from '@/data/characters'
import { Card, CardTitle } from '../ui/card'
import FavoriteButton from '../main/section/favorite-button'
import {
  cn,
  formatRomaji,
  getCharacterDetails,
  getFirstRomaji
} from '@/lib/utils'
import Link from 'next/link'

type category = 'hiragana' | 'katakana' | 'romaji'

function Modal() {
  const [character, setCharacter] = useState<CharacterDetails>({
    hiragana: '',
    katakana: '',
    romaji: ''
  })
  const [category, setCategory] = useState<category>('hiragana')
  const { isCardModal, toggleCardModal } = useModalStore()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const validateParams = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const categoryParam = params.get('category')
    const characterParam = params.get('character')

    const isValidCategory =
      categoryParam === 'hiragana' ||
      categoryParam === 'katakana' ||
      categoryParam === 'romaji'
    const isValidCharacter = characterParam && AllCharacters[characterParam]

    if (!isValidCategory || !isValidCharacter) {
      params.delete('category')
      params.delete('character')
      const url = `${pathname}?${params.toString()}`
      replace(url)
      return false
    }

    return { categoryParam, characterParam }
  }, [pathname, replace, searchParams])

  const fetchCardDetails = useCallback(() => {
    const result = validateParams()
    if (!result) return

    const { categoryParam, characterParam } = result

    setCategory(categoryParam as category)
    setCharacter(AllCharacters[characterParam])
  }, [validateParams])

  useEffect(() => {
    fetchCardDetails()
  }, [fetchCardDetails])

  useEffect(() => {
    const initializeModal = () => {
      const result = validateParams()
      if (!result) return

      if (result) {
        toggleCardModal(true)
      }
    }

    initializeModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleModalClose = useCallback(() => {
    toggleCardModal(false)
    const params = new URLSearchParams(searchParams)
    params.delete('category')
    params.delete('character')
    const url = `${pathname}?${params.toString()}`
    replace(url)
  }, [pathname, replace, searchParams, toggleCardModal])

  const fonts = useMemo(
    () => [
      'font-kosugi',
      'font-zen',
      'font-yuji',
      'font-mochiy',
      'font-shippori'
    ],
    []
  )

  const renderCardDetails = useCallback(() => {
    const { hiragana, katakana, romaji } = getCharacterDetails(character)

    const getMainText = (category: category) => {
      return typeof character[category] === 'string'
        ? character[category]
        : character[category].join(', ')
    }

    const getSecondaryText = (category: category) => {
      switch (category) {
        case 'romaji':
          return hiragana
        case 'hiragana':
          return katakana
        default:
          return hiragana
      }
    }

    const getTertiaryText = (category: category) => {
      switch (category) {
        case 'romaji':
          return katakana
        case 'katakana':
          return formatRomaji(romaji)
        default:
          return formatRomaji(romaji)
      }
    }

    const getSecondaryDescription = (category: category) => {
      switch (category) {
        case 'romaji':
          return 'hiragana'
        case 'hiragana':
          return 'katakana'
        default:
          return 'hiragana'
      }
    }

    const getTertiaryDescription = (category: category) => {
      switch (category) {
        case 'romaji':
          return 'katakana'
        case 'katakana':
          return 'romaji'
        default:
          return 'romaji'
      }
    }

    const firstRomaji = getFirstRomaji(romaji)

    return (
      <div className='flex'>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <DialogTitle
            className={cn('text-5xl sm:text-7xl text-center', {
              'text-2xl sm:text-4xl': category === 'romaji'
            })}
          >
            {getMainText(category)}
          </DialogTitle>
          <DialogDescription className='capitalize'>
            {category}
          </DialogDescription>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl sm:text-2xl'>
              <Link
                href={`/?category=${getSecondaryDescription(
                  category
                )}&character=${firstRomaji}`}
                passHref
              >
                {getSecondaryText(category)}
              </Link>
            </h3>
            <DialogDescription className='capitalize'>
              {getSecondaryDescription(category)}
            </DialogDescription>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='text-xl sm:text-2xl'>
              <Link
                href={`/?category=${getTertiaryDescription(
                  category
                )}&character=${firstRomaji}`}
                passHref
              >
                {getTertiaryText(category)}
              </Link>
            </h3>
            <DialogDescription className='capitalize'>
              {getTertiaryDescription(category)}
            </DialogDescription>
          </div>
        </div>
      </div>
    )
  }, [character, category])

  const renderVariations = useCallback(
    () => (
      <footer className='flex flex-col items-center gap-4'>
        <h3 className='text-lg sm:text-xl text-muted-foreground'>Variations</h3>
        <div className='flex gap-3 flex-wrap justify-center items-center'>
          {category === 'romaji'
            ? (['hiragana', 'katakana'] as Array<keyof CharacterDetails>).map(
                cat =>
                  fonts.map(font => (
                    <Card
                      key={`${cat}-${font}`}
                      className={`w-[75px] h-[75px] bg-secondary flex justify-center items-center ${font}`}
                    >
                      <CardTitle className='text-3xl font-normal'>
                        {character[cat]}
                      </CardTitle>
                    </Card>
                  ))
              )
            : fonts.map(font => (
                <Card
                  key={font}
                  className={`w-[80px] h-[80px] bg-secondary flex justify-center items-center ${font}`}
                >
                  <CardTitle className='text-4xl font-normal'>
                    {character[category]}
                  </CardTitle>
                </Card>
              ))}
        </div>
      </footer>
    ),
    [character, category, fonts]
  )

  return (
    <Dialog open={isCardModal} onOpenChange={handleModalClose}>
      <DialogContent className='w-5/6'>
        <div className='flex flex-col justify-center mt-5'>
          {category !== 'romaji' && (
            <DialogHeader className='h-fit flex items-end'>
              <FavoriteButton
                character={character}
                category={category}
                className='static'
              />
            </DialogHeader>
          )}
          {renderCardDetails()}
        </div>
        {renderVariations()}
      </DialogContent>
    </Dialog>
  )
}

export default function CardModal() {
  return (
    <Suspense>
      <Modal />
    </Suspense>
  )
}
