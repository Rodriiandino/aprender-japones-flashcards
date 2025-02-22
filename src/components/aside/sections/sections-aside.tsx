import { Separator } from '@/components/ui/separator'
import CustomPreparation from './custom-preparation'
import StudyPreparation from './study-preparation'
import HistorySection from './history/history-section'
import LearningProgress from './progress/learning-progress'
import AiSection from './ai/ai-section'

export default function SectionsAside() {
  return (
    <div className='flex flex-col gap-4 overflow-y-auto h-full py-4 pr-2'>
      <StudyPreparation />
      <Separator />
      <CustomPreparation />
      <Separator />
      <AiSection />
      <Separator />
      <HistorySection />
      <Separator />
      <LearningProgress />
    </div>
  )
}
