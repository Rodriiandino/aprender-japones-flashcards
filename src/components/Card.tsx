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

export default function CardSymbol() {
  return (
    <Card className='sm:w-[150px] w-[120px] sm:h-[180px] h-[150px] flex flex-col relative'>
      <CardHeader className='p-1 flex items-end absolute w-full'>
        <Button variant='ghost' size='sm'>
          <Heart size={18} />
        </Button>
      </CardHeader>
      <CardContent className='p-0 flex items-center justify-center h-full'>
        <CardTitle className='text-5xl'>カ</CardTitle>
      </CardContent>
      <CardFooter className='p-0 flex justify-center absolute bottom-0 w-full h-10 gap-5'>
        <CardDescription>Ka</CardDescription>|
        <CardDescription>か</CardDescription>
      </CardFooter>
    </Card>
  )
}
