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

export default function CardSymbol({
  character,
  primary
}: {
  character: CharacterDetails | CharacterCard
  primary: AlphabetCategory
}) {
  return (
    <Card className='lg:w-[105px] md:w-[95px] w-auto lg:h-[130px] md:h-[120px] sm:h-[125px] h-[110px] flex flex-col relative'>
      <CardHeader className='p-0 flex items-end absolute w-full'>
        <FavoriteButton character={character} primary={primary} />
      </CardHeader>
      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>
          {primary === 'hiragana' ? character.hiragana : character.katakana}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 sm:gap-2 gap-1'>
        <CardDescription className='md:text-sm xs:text-xs text-[11px]'>
          {typeof character.romaji === 'string'
            ? character.romaji
            : character.romaji[0]}
        </CardDescription>
        |
        <CardDescription className='md:text-sm xs:text-xs text-[11px]'>
          {primary === 'hiragana' ? character.katakana : character.hiragana}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
