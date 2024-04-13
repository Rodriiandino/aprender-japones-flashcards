import Aside from './aside/aside-content'
import Main from './main/main-content'

export default function Content() {
  return (
    <div className='h-full w-full flex'>
      <Aside />
      <Main />
    </div>
  )
}
