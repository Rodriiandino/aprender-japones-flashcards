import { CharacterCard, CharacterDetails } from '@/types/card-type'
import CardSymbol from './card'
import { AlphabetCategory } from '@/types/alphabet-type'

interface CardListProps {
  configCards: CharacterDetails[] | CharacterCard[]
  selectedAlphabet: AlphabetCategory
}

export default function CardList({
  configCards,
  selectedAlphabet
}: CardListProps) {
  return (
    <section className='w-full h-full md:flex content-start md:flex-wrap md:gap-3 gap-1 overflow-y-auto overflow-x-hidden grid grid-cols-5 pr-2'>
      {configCards.map((char, index) => (
        <CardSymbol key={index} character={char} category={selectedAlphabet} />
      ))}
    </section>
  )
}
