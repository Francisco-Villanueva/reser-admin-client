import { useStore } from '@/context/AdminContext'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import BarberInfo from '../BarberInfo'
import HoursInfo from '../HoursInfo'
import { useState } from 'react'

export default function MemberAside() {
  const [info, setInfo] = useState('perfil')
  const { selectedBarber } = useStore()
  return (
    <aside className="flex flex-col gap-2 h-full">
      <header className="flex   justify-between  border border-b-4 border-r-4 rounded-md p-2  ">
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

      <div className="flex flex-col gap-4 flex-grow">
        <Tabs defaultValue="perfil">
          <TabsList>
            <TabsTrigger
              className=" "
              value="perfil"
              onClick={() => {
                setInfo('perfil')
              }}
            >
              Perfil
            </TabsTrigger>
            <TabsTrigger
              value="horarios"
              onClick={() => {
                setInfo('horarios')
              }}
            >
              Horarios
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <section className="flex-grow  ">
          {info === 'perfil' ? <BarberInfo /> : <HoursInfo />}
        </section>
      </div>
    </aside>
  )
}
