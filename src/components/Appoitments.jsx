import AppointmentCard from '@/commons/AppointmentCard'
import React from 'react'

export default function Appoitments({ appointment, canceled = false }) {
  const { date, appointments } = appointment

  const appointmentsToShow = canceled
    ? appointments.filter((app) => app.name !== '')
    : appointments
  return (
    <div
      className={`flex flex-col gap-2 w-1/3 max-lg:w-[85%] m-auto  border-l-2 pl-2 ${canceled ? 'border-error' : 'border-blue'}  `}
    >
      {!appointmentsToShow.length ? (
        <span>No hay trunos cancelados</span>
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
