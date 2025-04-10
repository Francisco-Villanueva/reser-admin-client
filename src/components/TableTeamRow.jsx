import React, { useState } from 'react'
import Appoitments from './Appoitments'
import { useStore } from '@/context/AdminContext'
import { Button } from './ui/button'
import { CalendarCheck, CalendarClock, CalendarX } from 'lucide-react'
export default function TableTeamRow({ appointments, date, canceled = false }) {
  const { mainHours } = useStore()
  const [showingAllList, setShowingAllList] = useState(true)
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
  const handleAppointmnetsToShow = () => {
    setShowingAllList(!showingAllList)
  }
  return (
    <div className="flex flex-col items-center gap-2  md:container w-full h-full  ">
      <Button
        onClick={handleAppointmnetsToShow}
        variant="outline"
        className="text-xs"
        disabled={canceled}
      >
        {!showingAllList ? (
          <div className="flex items-center gap-2">
            <CalendarClock />
            <span>Ver Todos los horarios</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <CalendarCheck />
            <span>Ver Agendados</span>
          </div>
        )}
      </Button>
      <div className="  w-full overflow-auto   max-h-[100%]   max-sm:h-[100%] ">
        {resultArray.map((appointment) => (
          <Appoitments
            appointments={appointment.appointments}
            canceled={canceled}
            showingAllList={showingAllList}
          />
        ))}
      </div>
    </div>
  )
}
