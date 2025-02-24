import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { formatRomaji } from '@/lib/utils'

interface ResultCardProps {
  romaji: string | string[]
}

export const LeaningResultCard = ({ romaji }: ResultCardProps) => (
  <Card className='sm:h-[180px] h-[130px] flex flex-col relative border-none shadow-none'>
    <CardContent className='p-0 flex items-center justify-center h-full animate-fade-in duration-150'>
      <CardTitle className='text-4xl sm:text-6xl font-medium'>
        {formatRomaji(romaji)}
      </CardTitle>
    </CardContent>
  </Card>
)
