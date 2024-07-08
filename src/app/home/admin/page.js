'use client'

import ChildrenLayout from '@/commons/ChildrenLayout'
import { AddIcon, BellIcon } from '@/commons/Icons'
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
        <div className='flex justify-center items-center gap-4 font-semibold text-2xl'>
          <h2>Notifications</h2>
          <BellIcon/>
        </div>
        <div className='flex items-start gap-8 h-full px-4 max-lg:flex-col  max-lg:items-center'>
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
