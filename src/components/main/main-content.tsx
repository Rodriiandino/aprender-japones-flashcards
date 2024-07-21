import Header from './header/header-main'
import Search from './search/search'
import Section from './section/section'

export default function Main() {
  return (
    <main className='flex flex-col items-center justify-center gap-2 h-full w-full p-3 sm:pl-3 pl-6'>
      <Header />
      <Search />
      <Section />
    </main>
  )
}
