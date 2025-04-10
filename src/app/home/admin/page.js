'use client'
import ChildrenLayout from '@/commons/ChildrenLayout'
import { AddIcon, BellIcon } from '@/commons/Icons'
import {PickCalendar} from '@/components/Calendar/Calendar'
import GridTeam from '@/components/GridTeam'
import { useAsideStore } from '@/context/AsideContext'
import { Button } from '@/components/ui/button'
import AppointmentList from '@/components/Tables/AppointmentList'
import { useStore } from '@/context/AdminContext'

import {LoaderWrapper} from '@/commons/LoaderWrapper'
export default function AdminPage() {
  const { setAside } = useAsideStore()
  const {fetchingBarbers, barbers} =useStore()


  if(fetchingBarbers || barbers.length === 0) return <LoaderWrapper/> 
  return (
    <ChildrenLayout >
      <>
      <section className=" flex  flex-col h-full justify-between gap-4   overflow-auto   ">
        <div className=''>
          <GridTeam  />
        </div>
        
        <div className='flex flex-col gap-2 flex-grow brder h-[70%] '>
        <div className='flex justify-center items-center gap-4 font-semibold text-2xl max-md:text-lg'>
          <h2>Notificaciones</h2>
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
      </>
     
    </ChildrenLayout>
  )
}
