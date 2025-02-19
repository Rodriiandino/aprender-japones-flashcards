'use client'

import { useConfigLearnStore } from '@/store/learn-store'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'
import { Label } from '../../ui/label'
import { StudyMode } from '@/types/alphabet-type'
import { StatItem } from '@/components/ui/stat-item'
import { BookOpen } from 'lucide-react'

export default function StudyPreparation() {
  const {
    selectedAlphabet,
    configCards,
    selectedStudyMode,
    setSelectedStudyMode
  } = useConfigLearnStore()

  const handleStudyMode = (value: StudyMode) => {
    setSelectedStudyMode(value)
  }

  return (
    <section className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <BookOpen className='w-4 h-4 text-muted-foreground' />
        <h2 className='sm:text-ls text-base font-bold'>Study preparation</h2>
      </div>
      <p className='text-sm text-gray-500'>Configure your study session</p>
      <StatItem
        label='To learn'
        value={`${configCards.length} cards`}
        className='mt-2'
      />
      <StatItem label='Alphabet' value={selectedAlphabet} />

      <div className='flex flex-col gap-2'>
        <p className='text-sm text-muted-foreground'>Study method:</p>
        <RadioGroup
          value={selectedStudyMode}
          onValueChange={handleStudyMode}
          className='flex'
        >
          <div className='flex flex-col items-center gap-1'>
            <RadioGroupItem value='order' id='r-order' />
            <Label htmlFor='r-order'>Order</Label>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <RadioGroupItem value='random' id='r-random' />
            <Label htmlFor='r-random'>Random</Label>
          </div>
        </RadioGroup>
      </div>
    </section>
  )
}
