import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Heart } from 'lucide-react'
import { Button } from './ui/button'

export default function CardSymbol({
  symbol,
  reading
}: {
  symbol: string | [string[], string]
  reading: string
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
          {typeof symbol === 'string' ? symbol : symbol[1]}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 gap-2'>
        <CardDescription className='max-sm:text-[11px]'>
          {typeof symbol === 'string' ? reading : symbol[0].join(', ')}
        </CardDescription>
        |<CardDescription className='max-sm:text-[11px]'>か</CardDescription>
      </CardFooter>
    </Card>
  )
}
