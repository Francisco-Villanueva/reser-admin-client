'use client'
import ChildrenLayout from '@/commons/ChildrenLayout'
import AppointmentsList from '@/components/AppointmentsList'
import { useStore } from '@/context/AdminContext'
import { BarberServices } from '@/services/barber.services'
import React, { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      <ChildrenLayout className="flex flex-col gap-2">
      <Tabs defaultValue={selectedBarber?.id || barbers[0]?.id} className="w-[400px]">
      <TabsList>
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
      
      <hr/>
      {selectedBarber && <AppointmentsList />}
    </ChildrenLayout>
  )
}
