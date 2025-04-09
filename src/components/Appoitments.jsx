import AppointmentCard from '@/commons/AppointmentCard'
import React, { useState } from 'react'
import { Button } from './ui/button'

export default function Appoitments({ appointment, canceled = false }) {
  const { date, appointments } = appointment

  const initialState = canceled
    ? appointments.filter((appointment) => appointment.name !== '')
    : appointments

  const [appointmentsToShow, setAppointmnetsToShow] = useState(initialState)
  const [showingAllList, setShowingAllList] = useState(false)

  const handleAppointmnetsToShow = () => {
    setShowingAllList(!showingAllList)

    if (!showingAllList) {
      setAppointmnetsToShow(
        appointments.filter((appointment) => appointment.name !== ''),
      )
      return
    }
    setAppointmnetsToShow(appointments)
  }
  return (
    <div className={`flex flex-col gap-2       `}>
      <div className="flex items-center gap-2 ">
        <Button
          onClick={handleAppointmnetsToShow}
          variant="outline"
          size="sm"
          className="text-xs"
          disabled={canceled}
        >
          {showingAllList ? 'Ver todos los horarios' : 'Ver Agendados'}
        </Button>
        <span className="text-xs font-medium text-gray-500">
          {
            appointmentsToShow.filter((appointment) => appointment.name !== '')
              .length
          }
          {canceled ? ' Turnos Cancelados' : ' Turnos Agendados'}
        </span>
      </div>
      {!appointmentsToShow.length ? (
        <span className="h-full">No hay trunos cancelados</span>
      ) : (
        appointmentsToShow.map((appointment) => (
          <AppointmentCard
            appointment={appointment}
            date={date}
            canceled={canceled}
          />
        ))
      )}
    </div>
  )
}
