'use client'

import { useConfigLearnStore } from '@/store/learn-store'

export default function StudyPreparation() {
  const { alphabet, cardsToLearn } = useConfigLearnStore()

  return (
    <section className='flex flex-col gap-1'>
      <h2 className='text-xl font-bold'>Study preparation</h2>
      <p className='text-sm text-gray-500'>Start learning the alphabet</p>
      <div className='flex justify-between mt-2'>
        <p className='text-sm text-muted-foreground'>To learn:</p>
        <p className='text-sm text-muted-foreground'>{cardsToLearn} cards</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-sm text-muted-foreground'>Alphabet:</p>
        <p className='text-sm text-muted-foreground'>{alphabet}</p>
      </div>
    </section>
  )
}
