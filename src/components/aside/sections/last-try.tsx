import TooltipCustom from '@/components/tooltip-custom'

export default function LastTry() {
  return (
    <TooltipCustom text='Feature in development'>
      <section className='h-full flex flex-col justify-center items-center select-none opacity-60'>
        Last try
        <small className='text-xs text-center opacity-60'>
          This feature is in development and will be available soon.
        </small>
      </section>
    </TooltipCustom>
  )
}
