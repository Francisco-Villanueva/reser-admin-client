import { useAsideStore } from '@/context/AsideContext'
import AsideContent from './Aside/AsideContent'
import { Sheet, SheetContent } from '@/components/ui/sheet'
export default function Aside() {
  const { asideType } = useAsideStore()
  return asideType ? (
    <Sheet open={asideType !== null}>
      <SheetContent className="p-8">
        <AsideContent type={asideType} />
      </SheetContent>
    </Sheet>
  ) : null
}
