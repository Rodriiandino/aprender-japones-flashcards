import Header from './header/header'
import Section from './section/section'

export default function Main() {
  return (
    <main className='flex flex-col items-center justify-center gap-2 h-full'>
      <Header />
      <Section />
    </main>
  )
}
