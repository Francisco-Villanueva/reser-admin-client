'use client'
import Button from '@/commons/Button'
import ChildrenLayout from '@/commons/ChildrenLayout'
import AppointmentsList from '@/components/AppointmentsList'
import { useStore } from '@/context/AdminContext'
import { BarberServices } from '@/services/barber.services'
import React, { useEffect } from 'react'

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
      <section className="flex gap-4 ">
        {barbers.map((barber) => (
          <Button
           
            className={` ${barber.id === selectedBarber?.id ?"bg-blue text-white":"text-blue"} p-2 rounded-md `}
            onClick={() => handleSelectBarber(barber.id)}
          >
            {barber.name}
          </Button>
        ))}
      </section>
      <hr/>
      {selectedBarber && <AppointmentsList />}
    </ChildrenLayout>
  )
}
