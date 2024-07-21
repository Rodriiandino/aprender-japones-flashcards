import { AlphabetCategory } from '@/types/alphabet-type'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { CharacterCard, CharacterDetails } from '@/types/card-type'
import { getCharacterDetails, getEffectiveCategory } from '@/lib/utils'

interface LearningCardProps {
  character: CharacterDetails | CharacterCard
  category: AlphabetCategory
}

export default function LearningCard({
  character,
  category
}: LearningCardProps) {
  const { hiragana, katakana } = getCharacterDetails(character)
  const effectiveCategory = getEffectiveCategory(character, category)

  return (
    <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none shadow-none'>
      <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
        <CardTitle className='text-6xl sm:text-8xl'>
          {effectiveCategory === 'hiragana' ? hiragana : katakana}
        </CardTitle>
      </CardContent>
    </Card>
  )
}
