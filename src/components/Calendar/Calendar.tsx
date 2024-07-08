'use client'

import { Calendar } from '@/components/ui/calendar'
import { useStore } from '@/context/AdminContext'
import useDate from '@/hooks/useDate'
import { useState } from 'react'

export function PickCalendar() {
  const { filterAppointments, setDateOfFilter } = useStore()
  const { dateFormat_YMD } = useDate()
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleSelectDate = (date: Date) => {
    setDate(date)
    const dateToFilter = date ? dateFormat_YMD(date) : date
    setDateOfFilter(dateToFilter)
    filterAppointments(dateToFilter)
  }
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(date) => handleSelectDate(date)}
      className="rounded-md  border border-border "
    />
  )
}
