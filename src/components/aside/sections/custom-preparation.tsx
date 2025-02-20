import { useTranslations } from 'next-intl'
import { useCustomFontStore } from '@/store/learn-store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Paintbrush } from 'lucide-react'

export default function CustomPreparation() {
  const t = useTranslations('AsideComponent.CustomPreparation')
  const { selectedFont, setSelectedFont } = useCustomFontStore()

  const fonts = [
    { value: 'noto', label: 'Noto Sans' },
    { value: 'kosugi', label: 'Kosugi Maru' },
    { value: 'zen', label: 'Zen Antique' },
    { value: 'yuji', label: 'Yuji Syuku' },
    { value: 'mochiy', label: 'Mochiy Pop One' },
    { value: 'shippori', label: 'Shippori Mincho' }
  ]

  return (
    <section className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <Paintbrush className='w-4 h-4 text-muted-foreground' />
        <h2 className='sm:text-ls text-base font-bold'>{t('title')}</h2>
      </div>
      <p className='text-sm text-gray-500'>{t('description')}</p>
      <Select value={selectedFont} onValueChange={setSelectedFont}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder={t('select.placeholder')} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t('select.label')}</SelectLabel>
            {fonts.map(font => (
              <SelectItem
                key={font.value}
                value={font.value}
                className={`font-${font.value}`}
              >
                <span className='inline-flex items-center gap-2'>
                  <span className='text-base'>あ</span>
                  {font.label}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  )
}
