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
    <Card className='sm:w-[150px] sm:max-w-[150px] min-w-[100px] max-w-[120px] sm:h-[180px] h-[130px] flex flex-col relative'>
      <CardHeader className='p-1 flex items-end absolute w-full'>
        <Button variant='ghost' size='sm'>
          <Heart size={16} />
        </Button>
      </CardHeader>
      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle className='text-3xl sm:text-5xl'>
          {primary === 'hiragana' ? character.hiragana : character.katakana}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 gap-2'>
        <CardDescription className='max-sm:text-[11px]'>
          {character.romaji}
        </CardDescription>
        |
        <CardDescription className='max-sm:text-[11px]'>
          {primary === 'hiragana' ? character.katakana : character.hiragana}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
