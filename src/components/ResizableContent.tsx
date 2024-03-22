import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-[200px] max-w-md rounded-lg border'
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <aside>
          <header>Header</header>
          <section>Custom</section>
          <section>Config</section>
          <section>Last try</section>
          <footer>Footer</footer>
        </aside>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} maxSize={85} minSize={70}>
        <section>
          <header>Header</header>
          <section>
            <article>Card</article>
            <article>Card</article>
            <article>Card</article>
            <article>Card</article>
            <article>Card</article>
            <article>Card</article>
          </section>
        </section>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
