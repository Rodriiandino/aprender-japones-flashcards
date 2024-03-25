import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import HeaderSelect from './HeaderSelect'
import { ModeToggle } from './ModeToggle'
import CardSymbol from './Card'
import { HiraganaCharacters, KatakanaCharacters } from '@/data/characters'
import { useEffect, useState } from 'react'

type Config = {
  mode: 'Hiragana' | 'Katakana' | 'Kanji'
  group: string
  consonant: 'all' | 'voicedConsonants' | 'palatalizedConsonants'
}

type Characters = {
  [key: string]: string | [string[], string]
}

export function ResizableDemo() {
  const [config, setConfig] = useState<Config>({
    mode: 'Hiragana',
    group: 'all',
    consonant: 'all'
  })
  const [characters, setCharacters] = useState<Characters>()

  useEffect(() => {
    const getCharacters = () => {
      if (config.group === 'all' && config.consonant === 'all') {
        const selectMode =
          config.mode === 'Hiragana' ? HiraganaCharacters : KatakanaCharacters
        const allCharacters = Object.values(selectMode).flatMap(group =>
          Object.values(group)
        )

        return allCharacters.reduce((acc, group) => {
          return { ...acc, ...group }
        }, {})
      }
    }

    setCharacters(getCharacters())
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
        <aside>
          <header>Header</header>
          <section>Custom</section>
          <section>Config</section>
          <section>Last try</section>
          <footer>Footer</footer>
        </aside>
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
