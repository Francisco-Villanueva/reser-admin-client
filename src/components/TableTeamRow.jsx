import React from 'react'
import Appoitments from './Appoitments'
export default function TableTeamRow({ appointments }) {
  const DEFAULT_HOURS = [
    '10:00',
    '11:00',
    '12:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
  ]

  const organizedAppointments = {}

  // Obtener el rango de fechas desde hoy hasta 7 días en el futuro
  const today = new Date()
  const futureDates = []
  for (let i = 0; i < 15; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    futureDates.push(date.toISOString().split('T')[0])
  }

  // Inicializar el objeto organizedAppointments con todas las fechas y horarios por defecto
  futureDates.forEach((date) => {
    organizedAppointments[date] = { date, appointments: [] }
    organizedAppointments[date].appointments = DEFAULT_HOURS.map((hour) => {
      const matchingAppointment = appointments.find(
        (app) => app.date === date && app.time === hour,
      )

      if (matchingAppointment) {
        const { time, name, email, phone, id } = matchingAppointment
        return { hour: time, name, email, phone, id }
      } else {
        return { hour, name: '', email: '', phone: '' }
      }
    })
  })

  // Obtener el resultado como un array
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
