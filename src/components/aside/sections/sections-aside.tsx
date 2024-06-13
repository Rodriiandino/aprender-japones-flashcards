import { Separator } from '@/components/ui/separator'
import CustomPreparation from './custom-preparation'
import LastTry from './last-try'
import StudyPreparation from './study-preparation'

export default function SectionsAside() {
  return (
    <>
      <StudyPreparation />
      <Separator />
      <CustomPreparation />
      <Separator />
      <LastTry />
      <Separator />
    </>
  )
}
