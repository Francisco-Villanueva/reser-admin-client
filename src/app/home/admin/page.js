'use client'

import ChildrenLayout from '@/commons/ChildrenLayout'
import { AddIcon } from '@/commons/Icons'
import TitleView from '@/commons/TitleView'
import {PickCalendar} from '@/components/Calendar/Calendar'
import GridTeam from '@/components/GridTeam'
import { useStore } from '@/context/AdminContext'
import { useAsideStore } from '@/context/AsideContext'
import { Button } from '@/components/ui/button'
import AppointmentList from '@/components/Tables/AppointmentList'


export default function AdminPage() {
  const { barbers, dateOfFilter } = useStore()
  const { setAside } = useAsideStore()


  return (
    <ChildrenLayout >
      <section className=" flex  flex-col h-full justify-between gap-4   overflow-auto   ">
        <div className='flex flex-col gap-2'>

          <TitleView>Lista de peluqueros</TitleView>
          <GridTeam team={barbers} />
        </div>
        
        <div className='flex flex-col gap-2 flex-grow brder h-[70%] '>
          <section className='flex  p-2 justify-between'>
            <TitleView>Proximos turnos</TitleView>

            <div>
              <span className=' uppercase '>
                {dateOfFilter ? dateOfFilter : "Todos"}
              </span>
            </div>
          </section>
          <div className='flex items-start gap-8 h-full px-4 '>
            <PickCalendar/>
            <AppointmentList/>
          </div>
        </div>
      </section>

      <div className="h-10 w-10 absolute bottom-0 right-0   rounded-full ">
        <Button
          className={' rounded-full h-full w-full p-0 '}
          onClick={()=>setAside('newBarber')}
        >
          <AddIcon />
        </Button>
      </div>

     
     
    </ChildrenLayout>
  )
}
