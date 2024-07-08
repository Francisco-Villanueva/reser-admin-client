import { useStore } from '@/context/AdminContext'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import BarberInfo from '../BarberInfo'
import HoursInfo from '../HoursInfo'
import { useState } from 'react'
import BarberStatus from '@/commons/BarberStatus'
import AsideBackground from './AsideBackground'

export default function MemberAside() {
  const [info, setInfo] = useState('perfil')
  const { selectedBarber } = useStore()
  return (
    <aside className="flex flex-col gap-2 h-full">
      <AsideBackground />
      <header className="flex   justify-between  bg-secondary rounded-md p-4 ">
        <section className="flex flex-col">
          <p className=" text-xl">
            {selectedBarber.name} {selectedBarber.lastName}
          </p>
          <div>
            <span className="text-xs">{selectedBarber.email}</span>
          </div>
        </section>

        <div>
          <BarberStatus status={selectedBarber.status} />
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
