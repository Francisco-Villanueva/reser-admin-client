import React from 'react'
import Appoitments from './Appoitments'
import { useStore } from '@/context/AdminContext'
export default function TableTeamRow({ appointments, date }) {
  const { mainHours } = useStore()

  const organizedAppointments = {}

  const futureDates = [new Date(date).toISOString().split('T')[0]]
  futureDates.forEach((date) => {
    organizedAppointments[date] = { date, appointments: [] }
    organizedAppointments[date].appointments = mainHours.map((hour) => {
      const matchingAppointment = appointments.find(
        (app) => app.date == date && app.time == hour,
      )
      if (matchingAppointment) {
        const { time, name, email, phone, id } = matchingAppointment
        return { hour: time, name, email, phone, id }
      } else {
        return { hour, name: '', email: '', phone: '' }
      }
    })
  })

  const resultArray = Object.values(organizedAppointments)

  return (
    <div className="flex flex-col gap-2    overflow-auto max-h-[90%]">
      <div className="flex flex-col gap-2  ">
        {resultArray.map((appointment) => (
          <Appoitments appointment={appointment} />
        ))}
      </div>
    </div>
  )
}
