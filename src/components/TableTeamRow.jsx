import React from 'react'
import Appoitments from './Appoitments'
import { useStore } from '@/context/AdminContext'
export default function TableTeamRow({ appointments }) {
  const { mainHours } = useStore()

  const organizedAppointments = {}

  const today = new Date()
  const futureDates = []
  for (let i = 0; i < 15; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    futureDates.push(date.toISOString().split('T')[0])
  }
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

  // {date: '2024-01-30', hour: '19:00'}
  const test = appointments.find(
    (app) => app.date === '2024-01-17' && app.time === '09:00',
  )
  const resultArray = Object.values(organizedAppointments)
  return (
    <div className="flex flex-col gap-2    overflow-auto max-h-[90%]">
      <div className="flex flex-col gap-6  max-sm:gap-2 ">
        {resultArray
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((appointment) => (
            <Appoitments appointment={appointment} />
          ))}
      </div>
    </div>
  )
}
