'use client'

import { useConfigLearnStore } from '@/store/learn-store'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { howToStudyType } from '@/types/alphabetType'

export default function StudyPreparation() {
  const { alphabet, cardsToLearn, setHowToStudy, howToStudy } =
    useConfigLearnStore()

  const handleHowToStudy = (value: howToStudyType) => {
    setHowToStudy(value)
  }

  return (
    <section className='flex flex-col gap-1'>
      <h2 className='sm:text-xl text-lg font-bold'>Study preparation</h2>
      <p className='text-sm text-gray-500'>Start learning the alphabet</p>
      <div className='flex justify-between mt-2'>
        <p className='text-sm text-muted-foreground'>To learn:</p>
        <p className='text-sm text-muted-foreground'>{cardsToLearn} cards</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-sm text-muted-foreground'>Alphabet:</p>
        <p className='text-sm text-muted-foreground'>{alphabet}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm text-muted-foreground'>Study method:</p>
        <RadioGroup value={howToStudy} onValueChange={handleHowToStudy}>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='order' id='r-order' />
            <Label htmlFor='r-order'>Order</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='random' id='r-random' />
            <Label htmlFor='r-random'>Random</Label>
          </div>
        </RadioGroup>
      </div>
    </section>
  )
}
