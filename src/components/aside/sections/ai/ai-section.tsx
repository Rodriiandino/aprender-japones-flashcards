import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAiStore } from '@/store/learn-store'
import { useState } from 'react'

export default function AiSection() {
  const [token, setToken] = useState('')
  const { isAiActive, toggleAi } = useAiStore()

  const handleActivate = () => {
    console.log('Activate AI')
    toggleAi(true)
  }

  const handleDeactivate = () => {
    console.log('Deactivate AI')
    toggleAi(false)
  }

  const title = isAiActive ? 'Powered' : 'No Powered'
  const subTitle = isAiActive
    ? 'AI is activated. You can now use AI features.'
    : 'Activate AI to use AI features'

  return (
    <div className='flex flex-col gap-1'>
      <h2 className='sm:text-xl text-lg font-bold'>AI - {title}</h2>
      <p className='text-sm text-gray-500'>{subTitle}</p>
      {isAiActive ? (
        <Button variant={'secondary'} size={'sm'} onClick={handleDeactivate}>
          Deactivate
        </Button>
      ) : (
        <div className='flex flex-col gap-1 items-center'>
          <Input
            type='text'
            placeholder='Your token...'
            className='w-[99%]'
            onChange={e => setToken(e.target.value)}
            value={token}
          />
          <Button
            size={'sm'}
            variant={'secondary'}
            className='w-full'
            onClick={handleActivate}
          >
            Activate
          </Button>
        </div>
      )}
    </div>
  )
}
