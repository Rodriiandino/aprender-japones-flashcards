import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { AlphabetCategory } from '@/types/alphabet-type'
import FavoriteButton from './favorite-button'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { memo } from 'react'

interface CardSymbolProps {
  character: CharacterDetails | CharacterCard
  category: AlphabetCategory
}

function CardSymbol({ character, category }: CardSymbolProps) {
  const isCharacterCard = (
    character: CharacterDetails | CharacterCard
  ): character is CharacterCard => {
    return 'character' in character
  }

  const hiragana = isCharacterCard(character)
    ? character.character.hiragana
    : character.hiragana
  const katakana = isCharacterCard(character)
    ? character.character.katakana
    : character.katakana
  const romaji = isCharacterCard(character)
    ? character.character.romaji
    : character.romaji

  const effectiveCategory = isCharacterCard(character)
    ? character.type
    : category

  return (
    <Card className='lg:w-[105px] md:w-[95px] w-auto lg:h-[130px] md:h-[120px] sm:h-[125px] h-[110px] flex flex-col relative'>
      <CardHeader className='p-0 flex items-end absolute w-full'>
        <FavoriteButton character={character} category={effectiveCategory} />
      </CardHeader>
      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>
          {effectiveCategory === 'hiragana' ? hiragana : katakana}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 sm:gap-2 gap-1'>
        <CardDescription className='md:text-sm xs:text-xs text-[11px]'>
          {typeof romaji === 'string' ? romaji : romaji[0]}
        </CardDescription>
        |
        <CardDescription className='md:text-sm xs:text-xs text-[11px]'>
          {effectiveCategory === 'hiragana' ? katakana : hiragana}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default memo(CardSymbol)
