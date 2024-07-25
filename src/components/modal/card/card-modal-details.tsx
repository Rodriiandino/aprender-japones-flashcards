import { DialogTitle, DialogDescription } from '../../ui/dialog'
import Link from 'next/link'
import {
  cn,
  formatRomaji,
  getCharacterDetails,
  getFirstRomaji
} from '@/lib/utils'
import { CharacterDetails } from '@/types/card-type'
import { useCallback } from 'react'
import { category } from '@/types/alphabet-type'

type CardModalDetailsProps = {
  character: CharacterDetails
  category: category
}

function CardModalDetails({ character, category }: CardModalDetailsProps) {
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

  return <>{renderCardDetails()}</>
}

export default CardModalDetails
