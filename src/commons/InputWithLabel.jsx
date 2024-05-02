import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputWithLabel({ label, ...props }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label className="text-primary/80">{label}</Label>
      <Input {...props} />
    </div>
  )
}
