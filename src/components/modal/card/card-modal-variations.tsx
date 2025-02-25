import { useTranslations } from 'next-intl'
import { Category } from '@/types/alphabet-type'
import { Card, CardTitle } from '../../ui/card'
import { CharacterDetails } from '@/types/card-type'
import { useMemo, memo } from 'react'

type CardModalVariationsProps = {
  character: CharacterDetails
  category: Category
  fonts: string[]
}

type VariationCardProps = {
  font: string
  char: string | string[]
}

const VariationCard = memo(({ font, char }: VariationCardProps) => (
  <Card
    className={`w-[65px] h-[65px] sm:w-[80px] sm:h-[80px] bg-secondary flex justify-center items-center ${font}`}
  >
    <CardTitle className='text-4xl font-normal'>{char}</CardTitle>
  </Card>
))

VariationCard.displayName = 'VariationCard'

export default function CardModalVariations({
  character,
  category,
  fonts
}: CardModalVariationsProps) {
  const t = useTranslations('ModalComponent.card')
  const variations = useMemo(() => {
    if (category === 'romaji') {
      return ['hiragana', 'katakana'].flatMap(cat =>
        fonts.map(font => ({
          key: `${cat}-${font}`,
          font,
          char: character[cat as keyof CharacterDetails]
        }))
      )
    } else {
      return fonts.map(font => ({
        key: font,
        font,
        char: character[category]
      }))
    }
  }, [category, character, fonts])

  return (
    <footer className='flex flex-col items-center gap-4'>
      <h3 className='text-lg sm:text-xl text-muted-foreground'>
        {t('variations')}
      </h3>
      <div className='flex gap-3 flex-wrap justify-center items-center'>
        {variations.map(({ key, font, char }) => (
          <VariationCard key={key} font={font} char={char} />
        ))}
      </div>
    </footer>
  )
}
