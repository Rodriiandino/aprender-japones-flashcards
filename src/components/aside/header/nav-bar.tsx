import { Separator } from '@/components/ui/separator'
import FavoriteButton from './favorite-button'
import SearchButton from './search-button'
import StatsButton from './stats-button'

export default function NavBar() {
  return (
    <nav className='w-full flex justify-center items-center h-10'>
      <FavoriteButton />
      <Separator orientation='vertical' />
      <SearchButton />
      <Separator orientation='vertical' />
      <StatsButton />
    </nav>
  )
}
