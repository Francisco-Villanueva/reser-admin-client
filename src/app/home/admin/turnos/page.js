'use client'
import ChildrenLayout from '@/commons/ChildrenLayout'
import AppointmentsList from '@/components/AppointmentsList'
import { useStore } from '@/context/AdminContext'
import { BarberServices } from '@/services/barber.services'
import React, { useEffect } from 'react'
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TunosListPage() {
  const { barbers, selectedBarber, setSelectedBarber } = useStore()

  useEffect(() => {
    if (!selectedBarber || !selectedBarber.id) {
      setSelectedBarber(barbers[0])
    }
  }, [])
  const handleSelectBarber = (barberId) => {
    BarberServices.getBarber(barberId).then((res) => {
      setSelectedBarber(res.data)
    })
  }

  return (
      <ChildrenLayout>

    
        <div className=' flex bg-accent rounded-md  '>

          <div className='flex gap-4 h-full items-center border border-border rounded-md '>
            
            <div className='px-2 font-semibold '>Peluqueros</div>
            <Tabs defaultValue={selectedBarber?.id || barbers[0]?.id} className='p-0'>
              <TabsList className='bg-primary' >
              {barbers.map((barber) => (
                <TabsTrigger
                value={barber.id}
                
                onClick={() => handleSelectBarber(barber.id)}
                >
                        {barber.name}
                
                    </TabsTrigger>
                  ))}
            
              </TabsList>
            </Tabs>
        </div>
      </div>
      
     
      {selectedBarber && <AppointmentsList />}
    </ChildrenLayout>
  )
}
