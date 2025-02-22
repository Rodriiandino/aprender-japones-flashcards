import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card'
import { AlphabetCategory } from '@/types/alphabet-type'
import FavoriteButton from './favorite-button'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import {
  getCharacterDetails,
  getEffectiveCategory,
  getFirstRomaji
} from '@/lib/utils'
import { useModalStore, useCustomizationStore } from '@/store/learn-store'
import Link from 'next/link'

interface CardSymbolProps {
  character: CharacterDetails | CharacterCard
  category: AlphabetCategory
}

export default function CardSymbol({ character, category }: CardSymbolProps) {
  const { hiragana, katakana, romaji } = getCharacterDetails(character)
  const effectiveCategory = getEffectiveCategory(character, category)
  const { toggleCardModal, isCardModal } = useModalStore()
  const { selectedFont, cardVisibility } = useCustomizationStore()

  const handleOpenModal = () => {
    if (!isCardModal) {
      toggleCardModal(true)
    }
  }

  const firstRomaji = getFirstRomaji(romaji)
  const url = `/?category=${effectiveCategory}&character=${firstRomaji}`
  const showFooter = cardVisibility.romaji || cardVisibility.counterpart

  return (
    <Card className='lg:w-[105px] md:w-[95px] w-auto lg:h-[130px] md:h-[120px] sm:h-[125px] h-[110px] flex flex-col relative'>
      <CardHeader className='p-0 absolute w-full'>
        <FavoriteButton character={character} category={effectiveCategory} />
      </CardHeader>

      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle
          className={`lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-${selectedFont} ${
            !showFooter ? 'translate-y-2' : ''
          }`}
        >
          <Link href={url} passHref onClick={handleOpenModal}>
            {effectiveCategory === 'hiragana' ? hiragana : katakana}
          </Link>
        </CardTitle>
      </CardContent>

      {showFooter && (
        <CardFooter className='p-0 absolute bottom-0 w-full h-10 flex justify-center items-center sm:gap-2 gap-1'>
          {cardVisibility.romaji && (
            <CardDescription className='md:text-sm xs:text-xs text-[11px]'>
              {firstRomaji}
            </CardDescription>
          )}
          {cardVisibility.romaji && cardVisibility.counterpart && '|'}
          {cardVisibility.counterpart && (
            <CardDescription
              className={`md:text-sm xs:text-xs text-[11px] font-${selectedFont}`}
            >
              {effectiveCategory === 'hiragana' ? katakana : hiragana}
            </CardDescription>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
