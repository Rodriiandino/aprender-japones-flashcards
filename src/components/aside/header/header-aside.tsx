import { Separator } from '../../ui/separator'
import UserProfile from './user-profile'
import NavBar from './nav-bar'

export default function HeaderAside() {
  return (
    <header className='w-full flex flex-col pr-2'>
      <UserProfile />
      <Separator />
      <NavBar />
      <Separator />
    </header>
  )
}
