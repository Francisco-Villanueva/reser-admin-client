import { useStore } from '@/context/AdminContext'
import React, { useState } from 'react'
import TableTeamRow from './TableTeamRow'
import Loader from './Loader'
import ChildrenLayout from '@/commons/ChildrenLayout'
import TitleView from '@/commons/TitleView'
import { getFutureAppointments } from '@/utils/futureAppointments'
import Calendar from './Calendar'

export default function AppointmentsList() {
  const {
    selectedBarber: { appointments },
  } = useStore()
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])

  const futureAppointments =
    appointments && appointments.length > 0
      ? getFutureAppointments(appointments)
      : appointments

  return (
    <ChildrenLayout
      className={
        'flex flex-col gap-4   max-sm:gap-2 overflow-auto border-none '
      }
    >
      <TitleView>Próximos Turnos </TitleView>
      {appointments && (
        <Calendar handleDate={(date) => setDate(date)} selectedDay={date} />
      )}
      {appointments ? (
        <TableTeamRow appointments={futureAppointments} date={date} />
      ) : (
        <Loader />
      )}
    </ChildrenLayout>
  )
}
