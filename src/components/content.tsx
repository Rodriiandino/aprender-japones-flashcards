import Aside from './aside/aside'
import Main from './main/main'

export default function Content() {
  return (
    <div className='h-full w-full flex'>
      <Aside />
      <Main />
    </div>
  )
}
