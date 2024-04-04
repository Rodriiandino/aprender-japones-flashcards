'use client'

import { useModalStore } from '@/store/learn-store'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { Input } from '../ui/input'
import { Progress } from '@/components/ui/progress'

export default function ModalToStudy() {
  const { isOpen, setIsOpen } = useModalStore()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='sm:max-w-[600px] sm:h-[600px]'>
        <DialogHeader>
          <DialogTitle>Learning Title</DialogTitle>
          <DialogDescription>
            Description of the learning content
          </DialogDescription>
        </DialogHeader>
        <div>
          card
          <Input placeholder='Insert your answer..' />
        </div>
        <DialogFooter className='sm:flex sm:flex-col flex-col gap-1 sm:space-x-0'>
          <div>
            <p>
              Total questions: <strong>3</strong>
            </p>
          </div>
          <div>
            <p>
              Answered correctly: <strong>1</strong>
            </p>
          </div>
          <Progress value={33} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
