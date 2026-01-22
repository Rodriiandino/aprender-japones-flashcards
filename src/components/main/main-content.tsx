import Header from './header/header-main'
import Search from './search/search'
import Section from './section/section'
import { Suspense } from 'react'
import LoadingCards from './section/loading-cards'

export default function Main() {
  return (
    <main className='flex flex-col items-center justify-center gap-2 h-full w-full p-3 sm:pl-3 pl-6'>
      <Header />
      <Search />
      <Suspense fallback={<LoadingCards />}>
        <Section />
      </Suspense>
    </main>
  )
}
