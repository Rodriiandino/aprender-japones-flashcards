import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonCard() {
  return (
    <div className='lg:w-[105px] md:w-[95px] w-auto lg:h-[130px] md:h-[120px] sm:h-[125px] h-[110px] flex flex-col gap-1'>
      <Skeleton className='flex w-full h-6' />
      <Skeleton className='flex items-center justify-center h-full' />
      <div className='flex justify-center items-center w-full h-10 sm:gap-2 gap-1'>
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
      </div>
    </div>
  )
}
