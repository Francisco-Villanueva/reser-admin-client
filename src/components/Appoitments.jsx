import AppointmentCard from '@/commons/AppointmentCard'
import React from 'react'

export default function Appoitments({ appointment }) {
  const { date, appointments } = appointment
  return (
    <div className="flex flex-col gap-2 w-1/3 max-lg:w-[85%] m-auto  border-l-2 pl-2 border-blue  ">
      {appointments.map((appointment) => (
        <AppointmentCard appointment={appointment} date={date} />
      ))}
    </div>
  )
}
