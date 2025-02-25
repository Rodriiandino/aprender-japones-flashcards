import { useTranslations } from 'next-intl'
import { useCustomizationStore } from '@/store/learn-store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Settings2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CustomizationSection() {
  const t = useTranslations('AsideComponent.CustomPreparation')
  const { selectedFont, setSelectedFont, cardVisibility, setCardVisibility } =
    useCustomizationStore()

  const fonts = [
    { value: 'noto', label: 'Noto Sans' },
    { value: 'klee', label: 'Klee One' },
    { value: 'zenmaru', label: 'Zen Maru Gothic' },
    { value: 'yuji', label: 'Yuji Syuku' },
    { value: 'shippori', label: 'Shippori Mincho' },
    { value: 'mai', label: 'Yuji Mai' },
    { value: 'dot', label: 'DotGothic16' }
  ]

  const toggleVisibility = (type: 'romaji' | 'counterpart') => {
    setCardVisibility({
      ...cardVisibility,
      [type]: !cardVisibility[type]
    })
  }

  return (
    <section className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <Settings2 className='w-4 h-4 text-muted-foreground' />
        <h2 className='sm:text-ls text-base font-bold'>{t('title')}</h2>
      </div>
      <p className='text-sm text-gray-500'>{t('description')}</p>

      <div className='space-y-2'>
        <div>
          <h3 className='text-sm font-medium mb-2'>{t('fonts.title')}</h3>
          <Select value={selectedFont} onValueChange={setSelectedFont}>
            <SelectTrigger className='w-[99%] h-8 mx-auto'>
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
        </div>

        <div>
          <h3 className='text-sm font-medium mb-2'>{t('visibility.title')}</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <Button
              variant={'outline'}
              size='sm'
              onClick={() => toggleVisibility('romaji')}
              className='flex items-center gap-2'
            >
              {cardVisibility.romaji ? (
                <Eye className='w-4 h-4' />
              ) : (
                <EyeOff className='w-4 h-4' />
              )}
              {t('visibility.romaji')}
            </Button>
            <Button
              variant={'outline'}
              size='sm'
              onClick={() => toggleVisibility('counterpart')}
              className='flex items-center gap-2'
            >
              {cardVisibility.counterpart ? (
                <Eye className='w-4 h-4' />
              ) : (
                <EyeOff className='w-4 h-4' />
              )}
              {t('visibility.counterpart')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
