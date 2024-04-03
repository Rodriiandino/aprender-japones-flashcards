import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import Aside from './aside/aside'
import Main from './main/main'

export function ResizableContent() {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-[200px] rounded-lg border max-h-screen'
    >
      <ResizablePanel
        defaultSize={20}
        minSize={15}
        maxSize={30}
        className='p-2'
      >
        <Aside />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={80}
        maxSize={85}
        minSize={70}
        className='p-2'
      >
        <Main />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
