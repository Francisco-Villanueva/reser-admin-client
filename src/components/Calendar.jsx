import Button from '@/commons/Button'
import DateCard from '@/commons/DateCard'
import { ArrowLeft, ArrowRight } from '@/commons/Icons'
import { useStore } from '@/context/AdminContext'
import useDate from '@/hooks/useDate'
import React, { useState } from 'react'

export default function Calendar({
  handleDate,
  selectedDay,
  canceled = false,
}) {
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
    <section className="flex flex-col items-center gap-2 border-2 rounded-b-md border-border ">
      <span
        className={` text-center uppercase text-xl font-semibold  p-2 ${canceled ? 'bg-destructive text-white' : 'bg-primary text-secondary'}   w-full`}
      >
        {getMonth(selectedDay)}
      </span>
      <div className="flex gap-4 max-sm:gap-1 justify-around items-center  max-md:w-full pb-2 ">
        <Button onClick={() => setCalenadarLimits((s) => s - 1)}>
          <ArrowLeft className={'w-[14px]'} />
        </Button>

        {futureDates.map((day) => (
          <DateCard
            canceled={canceled}
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
