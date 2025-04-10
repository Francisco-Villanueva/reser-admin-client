import AppointmentCard from '@/commons/AppointmentCard'
import React, { useEffect, useState } from 'react'

export default function Appoitments({
  appointments,
  canceled = false,
  showingAllList,
}) {
  const initialState = canceled
    ? appointments.filter((appointment) => appointment.name !== '')
    : appointments

  const [appointmentsToShow, setAppointmnetsToShow] = useState(initialState)

  useEffect(() => {
    if (canceled) {
      setAppointmnetsToShow(
        appointments.filter((appointment) => appointment.name !== ''),
      )
    } else {
      if (!showingAllList) {
        setAppointmnetsToShow(
          appointments.filter((appointment) => appointment.name !== ''),
        )
        return
      }
      setAppointmnetsToShow(appointments)
    }
  }, [appointments])

  return (
    <div className={`flex flex-col gap-2       `}>
      <div className="flex items-center gap-2 ">
        <span className="text-xs font-medium text-gray-500">
          {
            appointmentsToShow.filter((appointment) => appointment.name !== '')
              .length
          }
          {canceled ? ' Turnos Cancelados' : ' Turnos Agendados'}
        </span>
      </div>
      {!appointmentsToShow.length ? (
        <span className="h-full">
          No hay trunos {canceled ? ' Cancelados' : ' Agendados'}
        </span>
      ) : (
        appointmentsToShow.map((appointment) => (
          <AppointmentCard appointment={appointment} canceled={canceled} />
        ))
      )}
    </div>
  )
}
