import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CharacterType } from '@/data/characters'
import { alphabetType } from '@/types/alphabetType'

export default function CardSymbol({
  character,
  primary
}: {
  character: CharacterType
  primary: alphabetType
}) {
  return (
    <Card className='lg:w-[105px] md:w-[95px] w-auto lg:h-[130px] md:h-[120px] sm:h-[125px] h-[110px] flex flex-col relative'>
      <CardHeader className='p-0 flex items-end absolute w-full'>
        <Button
          variant='ghost'
          size='sm'
          className='p-0 absolute right-2'
          disabled
        >
          <Heart size={15} />
        </Button>
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
