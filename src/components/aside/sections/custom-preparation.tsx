import TooltipCustom from '@/components/tooltip-custom'

export default function CustomPreparation() {
  return (
    <TooltipCustom text='Feature in development'>
      <section className='h-full flex flex-col justify-center items-center select-none opacity-60'>
        <p>Custom</p>
        <small className='text-xs text-center opacity-60'>
          This feature is in development and will be available soon.
        </small>
      </section>
    </TooltipCustom>
  )
}
