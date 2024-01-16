import { useStore } from '@/context/AdminContext'
import React from 'react'
import TableTeamRow from './TableTeamRow'
import Loader from './Loader'
import ChildrenLayout from '@/commons/ChildrenLayout'
import TitleView from '@/commons/TitleView'
import { getFutureAppointments } from '@/utils/futureAppointments'

export default function AppointmentsList() {
  const {
    selectedBarber: { appointments },
  } = useStore()

  const futureAppointments =
    appointments && appointments.length > 0
      ? getFutureAppointments(appointments)
      : appointments

  return (
    <ChildrenLayout className="flex flex-col gap-4   max-sm:gap-2 overflow-auto border-none ">
      <TitleView>Próximos Turnos: </TitleView>
      <hr />

      {appointments ? (
        <TableTeamRow appointments={futureAppointments} />
      ) : (
        <Loader />
      )}
    </ChildrenLayout>
  )
}
