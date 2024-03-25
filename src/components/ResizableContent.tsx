import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import HeaderSelect from './HeaderSelect'
import { ModeToggle } from './ModeToggle'
import CardSymbol from './Card'

export function ResizableDemo() {
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
        <section
          className='w-full h-full grid gap-3 overflow-y-auto overflow-x-hidden'
          style={{
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'repeat(auto-fit, minmax(180px, 1fr))'
          }}
        >
          {Array.from({ length: 71 }).map((_, i) => (
            <CardSymbol key={i} />
          ))}
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
