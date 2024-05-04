'use client'

import ChildrenLayout from '@/commons/ChildrenLayout'
import { AddIcon } from '@/commons/Icons'
import TitleView from '@/commons/TitleView'
import {PickCalendar} from '@/components/Calendar/Calendar'
import GridTeam from '@/components/GridTeam'
import { useStore } from '@/context/AdminContext'
import { AppointmentsTable } from '@/components/Tables'
import { useAsideStore } from '@/context/AsideContext'
import { Button } from '@/components/ui/button'


export default function AdminPage() {
  const { barbers } = useStore()
  const { setAside } = useAsideStore()

  return (
    <ChildrenLayout >
  
      
      <section className="   overflow-y-auto    h-full flex  flex-col  gap-2 ">
      <TitleView>Lista de peluqueros</TitleView>
        <GridTeam team={barbers} />

        
        <div className=' flex-grow '>
          <TitleView>Proximos turnos</TitleView>
          <div className='flex gap-8 p-2'>

          <PickCalendar/>
          <AppointmentsTable/>
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
