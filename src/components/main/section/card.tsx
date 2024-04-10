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
    <Card className='lg:w-[120px] md:w-[110px] sm:w-[100px] xs:w-[95px] w-[85px] lg:h-[150px] md:h-[140px] sm:h-[130px] xs:h-[125px] h-[110px] flex flex-col relative'>
      <CardHeader className='p-1 flex items-end absolute w-full'>
        <Button variant='ghost' size='sm' disabled>
          <Heart size={16} />
        </Button>
      </CardHeader>
      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle className='lg:text-5xl md:text-4xl text-3xl '>
          {primary === 'hiragana' ? character.hiragana : character.katakana}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 sm:gap-2 gap-1'>
        <CardDescription className='text-sm'>
          {typeof character.romaji === 'string'
            ? character.romaji
            : character.romaji[0]}
        </CardDescription>
        |
        <CardDescription className='text-sm'>
          {primary === 'hiragana' ? character.katakana : character.hiragana}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
