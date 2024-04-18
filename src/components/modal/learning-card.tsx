import { alphabetType } from '@/types/alphabetType'
import { Card, CardContent, CardTitle } from '../ui/card'
import { CharacterType } from '@/data/characters'

export default function LearningCard({
  character,
  primary
}: {
  character: CharacterType
  primary: alphabetType
}) {
  return (
    <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none'>
      <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
        <CardTitle className='text-6xl sm:text-8xl'>
          {primary === 'hiragana' ? character.hiragana : character.katakana}
        </CardTitle>
      </CardContent>
    </Card>
  )
}
