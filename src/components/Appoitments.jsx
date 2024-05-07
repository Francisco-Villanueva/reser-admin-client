import AppointmentCard from '@/commons/AppointmentCard'
import React from 'react'

export default function Appoitments({ appointment, canceled = false }) {
  const { date, appointments } = appointment

  const appointmentsToShow = canceled
    ? appointments.filter((appointment) => appointment.name !== '')
    : appointments
  return (
    <div className={`flex flex-col gap-2       `}>
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
