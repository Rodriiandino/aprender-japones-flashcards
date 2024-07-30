import { Card, CardContent, CardTitle } from '@/components/ui/card'

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
