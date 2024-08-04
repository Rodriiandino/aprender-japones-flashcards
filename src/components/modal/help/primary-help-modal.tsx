'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import { useModalStore } from '@/store/learn-store'

export default function PrimaryHelpModal() {
  const { isHelpModalOpen, toggleHelpModal } = useModalStore()

  return (
    <Dialog open={isHelpModalOpen} onOpenChange={toggleHelpModal}>
      <DialogContent className='w-5/6'>
        <DialogHeader>
          <DialogTitle>How to use</DialogTitle>
          <DialogDescription>
            This is a simple app to help you learn Japanese characters. You can
            choose the characters you want to learn, the study mode and start
            learning.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 max-h-96 h-full flex flex-col gap-2 overflow-y-auto p-1'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>🔤 Choose Your Alphabet</AccordionTrigger>
              <AccordionContent>
                Select between <strong>Hiragana</strong>,{' '}
                <strong>Katakana</strong>, or both. Kanji support is coming
                soon!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>📚 Character Cards</AccordionTrigger>
              <AccordionContent>
                View cards displaying characters, their Romaji pronunciation,
                and corresponding counterparts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>🎲 Learning Modes</AccordionTrigger>
              <AccordionContent>
                Choose between <strong>random</strong> or{' '}
                <strong>sequential</strong> learning to match your study
                preferences.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>📊 Track Your Progress</AccordionTrigger>
              <AccordionContent>
                Keep track of your learning journey with detailed statistics on
                your correct answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
              <AccordionTrigger>⭐ Favorites</AccordionTrigger>
              <AccordionContent>
                Save your favorite characters and prioritize learning them
                first.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-6'>
              <AccordionTrigger>🖼️ Character Details</AccordionTrigger>
              <AccordionContent>
                Click on a card to open a modal showcasing various typographic
                variants of the character.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-7'>
              <AccordionTrigger>🤖 AI-Powered Assistance</AccordionTrigger>
              <AccordionContent>
                Activate AI features with your token to unlock helpful buttons
                and an interactive chat for personalized learning support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <DialogFooter>
          <h4 className='text-sm text-gray-500'>
            Start your Japanese learning adventure with Learn Japanese today!
          </h4>
          <div className='flex items-center gap-1'>
            <a
              href='https://github.com/Rodriiandino'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100 transition-opacity'
            >
              <svg width='32' height='32' viewBox='0 0 24 24'>
                <path
                  fill='CurrentColor'
                  d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/rodrigoandino03/'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100 transition-opacity'
            >
              <svg width='32' height='32' viewBox='0 0 24 24'>
                <path
                  fill='CurrentColor'
                  d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                />
              </svg>
            </a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
