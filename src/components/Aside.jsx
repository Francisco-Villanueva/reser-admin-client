import { useAsideStore } from '@/context/AsideContext'
import AsideContent from './Aside/AsideContent'
import { Sheet, SheetContent } from '@/components/ui/sheet'
export default function Aside() {
  const { asideType } = useAsideStore()
  return (
    <Sheet open={asideType !== null}>
      <SheetContent className="py-10">
        <AsideContent type={asideType} />
      </SheetContent>
    </Sheet>
  )
}
