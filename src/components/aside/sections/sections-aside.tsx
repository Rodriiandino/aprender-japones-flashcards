import { Separator } from '@/components/ui/separator'
import CustomPreparation from './custom-preparation'
import StudyPreparation from './study-preparation'
import HistorySection from './history/history-section'

export default function SectionsAside() {
  return (
    <>
      <StudyPreparation />
      <Separator />
      <CustomPreparation />
      <Separator />
      <HistorySection />
      <Separator />
    </>
  )
}
