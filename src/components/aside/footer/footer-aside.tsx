'use client'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/store/learn-store'

export default function Footer() {
  const { setIsOpen } = useModalStore()

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return (
    <footer>
      <Button
        variant='default'
        className='w-full h-16 sm:text-base'
        onClick={handleOpenModal}
      >
        Start learning
      </Button>
    </footer>
  )
}
