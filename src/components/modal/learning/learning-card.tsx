import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useCustomizationStore } from '@/store/learn-store'

interface LearningCardProps {
  effectiveCategory: string
  hiragana: string
  katakana: string
}

export default function LearningCard({
  effectiveCategory,
  hiragana,
  katakana
}: LearningCardProps) {
  const { selectedFont } = useCustomizationStore()

  return (
    <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none shadow-none'>
      <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
        <CardTitle className={`text-6xl sm:text-8xl font-${selectedFont}`}>
          {effectiveCategory === 'hiragana' ? hiragana : katakana}
        </CardTitle>
      </CardContent>
    </Card>
  )
}
