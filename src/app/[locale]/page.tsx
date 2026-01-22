import Content from '@/components/content'
import { Toaster } from '@/components/ui/sonner'
import { ModalsProvider } from '@/components/modal/modals-provider'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Content />
      <Suspense>
        <ModalsProvider />
      </Suspense>
      <Toaster />
    </>
  )
}
