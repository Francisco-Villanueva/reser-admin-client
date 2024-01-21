import Button from '@/commons/Button'
import DateCard from '@/commons/DateCard'
import { ArrowLeft, ArrowRight } from '@/commons/Icons'
import { useStore } from '@/context/AdminContext'
import useDate from '@/hooks/useDate'
import React, { useState } from 'react'

export default function Calendar({ handleDate, selectedDay }) {
  const { formatDayOfMonth, getMonth } = useDate()
  const {
    mainHours,
    selectedBarber: { appointments },
  } = useStore()

  const [calendarLimits, setCalenadarLimits] = useState(0)
  const organizedAppointments = {}
  const today = new Date()
  const futureDates = []
  for (let i = calendarLimits; i < calendarLimits + 7; i++) {
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
  return (
    <section className="flex flex-col items-center gap-2">
      <span className=" text-sm font-semibold text-white p-2 bg-black rounded-md w-[80%]">
        {getMonth(selectedDay)}
      </span>
      <div className="flex gap-4 max-sm:gap-1 justify-center items-center   ">
        <Button onClick={() => setCalenadarLimits((s) => s - 1)}>
          <ArrowLeft className={'w-[14px]'} />
        </Button>

        {futureDates.map((day) => (
          <DateCard
            handleDate={() => handleDate(day)}
            date={formatDayOfMonth(day)}
            isSelected={day === selectedDay}
          />
        ))}

        <Button onClick={() => setCalenadarLimits((s) => s + 1)}>
          <ArrowRight className={'w-[14px]'} />
        </Button>
      </div>
    </section>
  )
}
