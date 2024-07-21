import { formatRomaji, getCharacterDetails, getFirstRomaji } from '@/lib/utils'
import { useModalStore } from '@/store/learn-store'
import { CharacterDetails } from '@/types/card-type'
import Link from 'next/link'

interface CharacterLiProps {
  index: number
  character: CharacterDetails
}

export default function CharacterLi({ index, character }: CharacterLiProps) {
  const { hiragana, katakana, romaji } = getCharacterDetails(character)
  const { toggleCardModal, isCardModal } = useModalStore()

  const handleOpenModal = () => {
    if (!isCardModal) {
      toggleCardModal(true)
    }
  }

  const effectiveCategory = 'romaji'
  const firstRomaji = getFirstRomaji(romaji)
  const url = `/?category=${effectiveCategory}&character=${firstRomaji}`

  return (
    <li className='relative hover:bg-secondary cursor-pointer rounded-md'>
      <span className='absolute top-1 left-1 text-[8px] text-muted-foreground'>
        {index + 1}
      </span>
      <Link
        href={url}
        className='w-full text-center block p-2'
        passHref
        onClick={handleOpenModal}
      >
        {formatRomaji(romaji)}:
        <span className='text-muted-foreground pl-2'>
          [{hiragana} - {katakana}]
        </span>
      </Link>
    </li>
  )
}
