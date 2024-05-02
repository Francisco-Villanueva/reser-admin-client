import { useStore } from '@/context/AdminContext'
import BarberDetails from '../BarberDetails'
import { Badge } from '../ui/badge'
import BarberInfo from '../BarberInfo'
import HoursInfo from '../HoursInfo'

export default function MemberAside() {
  const { selectedBarber } = useStore()
  return (
    <aside className="flex flex-col gap-2 h-full">
      <header className="flex  bg-secondary justify-between border rounded-md p-2 ">
        <section className="flex flex-col">
          <div className="flex  gap-1">
            <p>{selectedBarber.name}</p>
            <p>{selectedBarber.lastName}</p>
          </div>
          <div>
            <span className="text-xs">{selectedBarber.email}</span>
          </div>
        </section>

        <div>
          <Badge className="font-light">{selectedBarber.status}</Badge>
        </div>
      </header>

      <section className="overflow-y-auto ">
        <BarberInfo />
        <HoursInfo />
      </section>
    </aside>
  )
}
