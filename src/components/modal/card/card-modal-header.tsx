import { DialogHeader } from '../../ui/dialog'
import FavoriteButton from '../../main/section/favorite-button'
import { CharacterDetails } from '@/types/card-type'
import { AlphabetCategory } from '@/types/alphabet-type'

type CardModalHeaderProps = {
  character: CharacterDetails
  category: AlphabetCategory
}

export default function CardModalHeader({
  character,
  category
}: CardModalHeaderProps) {
  return (
    <DialogHeader className='h-fit flex items-end'>
      <FavoriteButton
        character={character}
        category={category}
        className='static'
      />
    </DialogHeader>
  )
}
