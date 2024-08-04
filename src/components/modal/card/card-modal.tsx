import { Suspense } from 'react'
import ModalContent from './card-modal-content'

export default function CardModal() {
  return (
    <Suspense>
      <ModalContent />
    </Suspense>
  )
}
