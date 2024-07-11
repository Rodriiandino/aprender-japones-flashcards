import { Separator } from '../../ui/separator'
import UserProfile from './user-profile'
import NavBar from './nav-bar'

export default function HeaderAside() {
  return (
    <header className='w-full flex flex-col'>
      <UserProfile />
      <Separator />
      <NavBar />
      <Separator />
    </header>
  )
}
