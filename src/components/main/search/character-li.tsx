import { CharacterDetails } from '@/types/card-type'

interface CharacterLiProps {
  index: number
  character: CharacterDetails
}

export default function CharacterLi({ index, character }: CharacterLiProps) {
  return (
    <li className='relative p-[10px] hover:bg-secondary cursor-pointer rounded-md'>
      <span className='absolute top-1 left-1 text-[8px] text-muted-foreground'>
        {index + 1}
      </span>
      <span className='w-full text-center'>
        {typeof character.romaji === 'string'
          ? character.romaji
          : character.romaji.join(', ')}
        :
        <span className='text-muted-foreground pl-2'>
          [{character.hiragana} - {character.katakana}]
        </span>
      </span>
    </li>
  )
}
