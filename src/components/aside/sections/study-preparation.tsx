'use client'

import { useConfigLearnStore } from '@/store/learn-store'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'
import { Label } from '../../ui/label'
import { howToStudyType } from '@/types/alphabetType'
import { StatItem } from '@/components/ui/stat-item'

export default function StudyPreparation() {
  const { alphabet, cards, setHowToStudy, howToStudy } = useConfigLearnStore()

  const handleHowToStudy = (value: howToStudyType) => {
    setHowToStudy(value)
  }

  return (
    <section className='flex flex-col gap-1'>
      <h2 className='sm:text-xl text-lg font-bold'>Study preparation</h2>
      <p className='text-sm text-gray-500'>Start learning the alphabet</p>
      <StatItem
        label='To learn'
        value={`${cards.length} cards`}
        className='mt-2'
      />
      <StatItem label='Alphabet' value={alphabet} />

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
