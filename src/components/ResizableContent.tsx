import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import HeaderSelect from './HeaderSelect'
import { ModeToggle } from './ModeToggle'
import CardSymbol from './Card'
import { useState, useEffect } from 'react'
import {
  AllHiraganaCharacters,
  AllKatakanaCharacters,
  type AllCharactersType
} from '@/data/characters'
import { alphabetType } from '@/store/learnStore'
import { useStore } from '@nanostores/react'
import Aside from './aside/Aside'

export function ResizableDemo() {
  const config = useStore(alphabetType)
  const [characters, setCharacters] = useState<AllCharactersType>(
    config === 'hiragana' ? AllHiraganaCharacters : AllKatakanaCharacters
  )

  useEffect(() => {
    setCharacters(
      config === 'hiragana' ? AllHiraganaCharacters : AllKatakanaCharacters
    )
  }, [config])

  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-[200px] rounded-lg border'
    >
      <ResizablePanel
        defaultSize={20}
        minSize={15}
        maxSize={30}
        className='p-2 flex justify-between items-center flex-col gap-2'
      >
        <Aside />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={80}
        maxSize={85}
        minSize={70}
        className='p-2 flex justify-between items-center flex-col gap-2'
      >
        <header className='w-full flex justify-between items-center gap-2'>
          <HeaderSelect />
          <ModeToggle />
        </header>
        <section className='w-full h-full flex flex-wrap sm:gap-3 gap-1 overflow-y-auto overflow-x-hidden'>
          {characters &&
            Object.entries(characters).map(([key, value]) => (
              <CardSymbol key={key} symbol={value} reading={key} />
            ))}
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
