'use client'
import ChildrenLayout from '@/commons/ChildrenLayout'
import AppointmentsList from '@/components/AppointmentsList'
import { useStore } from '@/context/AdminContext'
import { BarberServices } from '@/services/barber.services'
import React, { useEffect, useState } from 'react'
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users } from 'lucide-react'

export default function TunosListPage() {
  const { barbers, selectedBarber, setSelectedBarber, setLoadingBarberDetails } = useStore()

  
  useEffect(() => {
    if (!selectedBarber || !selectedBarber.id) {
      setSelectedBarber(barbers[0])
    }
  }, [])
  const handleSelectBarber =async (barberId) => {
    setLoadingBarberDetails(true)
    const response = await BarberServices.getBarber(barberId)
    setSelectedBarber(response.data)
    setLoadingBarberDetails(false)
  }

  return (
      <ChildrenLayout>
        
          <div className=' container flex items-center gap-2  '>
            <Users/>
            <Tabs defaultValue={selectedBarber?.id || barbers[0]?.id} className='p-0   '>
              <TabsList  >
              {barbers.map((barber) => (
                <TabsTrigger
                value={barber.id}                
                onClick={() => handleSelectBarber(barber.id)}
                key={barber.id}
                className='text-xs'
                > 
                  {barber.name}
                </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
        </div>
      
     
      {selectedBarber && <AppointmentsList />}
    </ChildrenLayout>
  )
}
