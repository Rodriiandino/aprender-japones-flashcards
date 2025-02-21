'use client'
import { useTranslations } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { useConfigLearnStore } from '@/store/learn-store'

export default function HeaderSelect() {
  const t = useTranslations('HeaderComponent.select')
  const { selectedAlphabet, setSelectedAlphabet } = useConfigLearnStore()

  return (
    <Select value={selectedAlphabet} onValueChange={setSelectedAlphabet}>
      <SelectTrigger className='w-full h-14 hover:bg-accent'>
        <SelectValue placeholder={t('placeholder')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t('label')}</SelectLabel>
          <SelectItem value='hiragana+katakana'>{t('options.both')}</SelectItem>
          <SelectItem value='hiragana'>{t('options.hiragana')}</SelectItem>
          <SelectItem value='katakana'>{t('options.katakana')}</SelectItem>
          <SelectItem value='favorite'>{t('options.favorite')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
