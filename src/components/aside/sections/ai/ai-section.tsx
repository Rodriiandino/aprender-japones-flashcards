import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useAiStore, useModalStore } from '@/store/learn-store'
import { useState } from 'react'
import { Stars } from 'lucide-react'

export default function AiSection() {
  const [token, setToken] = useState('')
  const {
    isAiActive,
    toggleAi,
    iaToken,
    setIaToken,
    aiProvider,
    setAiProvider
  } = useAiStore()
  const { isAiModalOpen, toggleAiModal } = useModalStore()

  const handleActivate = () => {
    if (token === '') return
    setIaToken(token)
    toggleAi(true)
  }

  const handleDeactivate = () => {
    if (iaToken === '') return
    setIaToken('')
    toggleAi(false)
  }

  const handleToggleModal = () => {
    toggleAiModal(!isAiModalOpen)
  }

  const title = isAiActive ? 'Ai Powered' : 'Ai No Powered'
  const subTitle = isAiActive
    ? 'AI is activated. You can now use AI features.'
    : 'Activate AI to use AI features'

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex items-center gap-2'>
        <Stars className='w-4 h-4 text-muted-foreground' />
        <h2 className='sm:text-ls text-base font-bold'>{title}</h2>
      </div>
      <p className='text-sm text-gray-500'>{subTitle}</p>

      {isAiActive ? (
        <>
          <Button size={'sm'} onClick={handleToggleModal}>
            Open Chat
          </Button>
          <Button variant={'secondary'} size={'sm'} onClick={handleDeactivate}>
            Deactivate
          </Button>
        </>
      ) : (
        <div className='flex flex-col gap-1 items-center'>
          <Select value={aiProvider} onValueChange={setAiProvider}>
            <SelectTrigger className='w-[99%] h-8'>
              <SelectValue placeholder='Selecciona un alfabetos' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>AI Provider</SelectLabel>
                <SelectItem value='openai'>
                  <span className='flex gap-1 items-center'>
                    <svg width='16' height='16' strokeLinejoin='round'>
                      <path
                        fill='currentColor'
                        d='M14.9449 6.54871c.3679-1.08952.2412-2.28304-.3471-3.27407-.8847-1.52003-2.6633-2.302045-4.4004-1.93404C9.42464.481584 8.3144-.00692594 7.15045.00007421 5.37487-.00392587 3.79946 1.1241 3.2532 2.79113c-1.14064.23051-2.12521.93502-2.701363 1.93355-.891334 1.51603-.688137 3.42707.502673 4.7271-.367884 1.08952-.241202 2.28302.34711 3.27402.88475 1.5201 2.66336 2.3021 4.40042 1.9341.77226.859 1.883 1.3475 3.04696 1.34 1.7766.0045 3.3525-1.1245 3.8988-2.793 1.1406-.2305 2.1252-.9351 2.7013-1.9336.8903-1.51602.6866-3.42556-.5037-4.72559l-.0005.001ZM8.85001 14.9544c-.71094.001-1.39958-.2445-1.94533-.694.02483-.013.06791-.0365.09578-.0535l3.22884-1.8401c.1652-.0925.2666-.266.2656-.4535V7.42173l1.3646.77752c.0147.007.0243.021.0263.037v3.71955c-.002 1.6541-1.3595 2.9951-3.03579 2.9986Zm-6.52868-2.7516c-.35623-.607-.48443-1.3185-.36231-2.009.02382.014.06587.0395.09577.0565l3.22887 1.84c.16367.0945.36637.0945.53055 0l3.94183-2.24601v1.55501c.00101.016-.00659.0315-.01926.0415l-3.26383 1.8596c-1.4538.826-3.31045.335-4.15111-1.0976h-.00051Zm-.84978-6.95461c.35471-.60802.91464-1.07303 1.5815-1.31453 0 .0275-.00153.076-.00153.11v3.68058c-.00101.187.10034.36051.26502.45301l3.94184 2.24555-1.36462.7775c-.01368.009-.03091.0105-.04611.004L2.58331 9.34327C1.13255 8.51426.63494 6.68272 1.47104 5.24869l.00051-.0005ZM12.6834 7.82274 8.74157 5.57669l1.36463-.77701c.0137-.009.0309-.0105.0461-.004l3.2643 1.85954c1.4533.82851 1.9515 2.66305 1.1118 4.09708-.3552.607-.9146 1.072-1.581 1.314V8.27575c.0015-.187-.0993-.36001-.2635-.45301h-.0005Zm1.358-2.01704c-.0238-.0145-.0658-.0395-.0957-.0565l-3.2289-1.84004c-.1637-.0945-.3664-.0945-.5305 0L6.24442 6.15521V4.60017c-.00102-.016.00658-.0315.01925-.0415l3.26384-1.85804c1.45379-.82752 3.31249-.335 4.15059 1.10003.3542.60601.4824 1.31552.3623 2.00504h.001ZM5.50257 8.57726l-1.36513-.77752c-.01469-.007-.02432-.021-.02635-.037V4.04316C4.11211 2.38713 5.47368 1.0451 7.15197 1.0461c.70992 0 1.39705.246 1.94279.69401-.02483.013-.06739.0365-.09577.0535L5.77012 3.63365c-.16519.0925-.26654.26551-.26553.45301l-.00202 4.4896v.001Zm.74134-1.57704L7.99972 5.9997l1.75581 1.00002v2.00055L7.99972 10.0003 6.24391 9.00027V7.00022Z'
                      />
                    </svg>
                    OpenAI gpt-4o-mini
                  </span>
                </SelectItem>
                <SelectItem value='groq'>
                  <span className='flex gap-1 items-center'>
                    <svg width='16' height='16' viewBox='0 0 24 24'>
                      <path
                        fill='none'
                        stroke='currentcolor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M12 9.87Q14.943 4.999 17.165 5c2.222 0 3.625 2.582 4.444 6.086.782 3.348.556 7.914-2.222 7.914-1.238 0-2.942-1.826-4.61-4.26A32.6 32.6 0 0 1 12 9.87m0 0Q8.762 4.999 6.319 5c-2.445 0-3.988 2.582-4.89 6.086C.57 14.435.82 19 3.875 19c1.362 0 3.237-1.826 5.07-4.26Q10.777 12.303 12 9.87'
                        color='currentcolor'
                      />
                    </svg>
                    Meta llama-3-8b-instruct-groq
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            type='text'
            placeholder='Your token...'
            className='w-[99%] h-8'
            onChange={e => setToken(e.target.value)}
            value={token}
          />
          <Button
            size={'sm'}
            variant={'secondary'}
            className='w-full'
            onClick={handleActivate}
            disabled={!token}
          >
            Activate
          </Button>
        </div>
      )}
    </div>
  )
}
