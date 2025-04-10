import { useStore } from '@/context/AdminContext'
import React, { useEffect, useState } from 'react'
import TableTeamRow from './TableTeamRow'
import Loader from './Loader'
import Calendar from './Calendar'
import { AppointmentServices } from '@/services'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoaderWrapper } from '@/commons/LoaderWrapper'
export default function AppointmentsList() {
  const {
    selectedBarber: { appointments, id, isAdmin },
    loadingBarberDetails,
  } = useStore()
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [view, setView] = useState('appointments')
  const [cancelledAppointments, setCancelledAppointments] = useState([])

  useEffect(() => {
    if (!id) return

    AppointmentServices.getCancelled({ barberId: id }).then((res) => {
      setCancelledAppointments(res.data)
    })
  }, [id])
  return (
    <section
      className={`flex flex-col gap-4    max-sm:gap-2    py-2  h-[95%]  max-lg:h-[90%]  max-sm:h-[90%] container  `}
    >
      <section className="flex flex-col items-center  justify-center gap-2 ">
        <Calendar
          handleDate={(date) => setDate(date)}
          selectedDay={date}
          canceled={cancelledAppointments && view === 'cancelled'}
        />
        <div className="flex gap-2">
          <Tabs defaultValue="appointments">
            <TabsList>
              <TabsTrigger
                defaultChecked
                value="appointments"
                onClick={() => setView('appointments')}
              >
                Próximos Turnos
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                onClick={() => setView('cancelled')}
              >
                Tunos Cancelados
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {loadingBarberDetails ? (
        <LoaderWrapper text="Cargando Turnos" />
      ) : (
        <section className="h-[80%]  max-lg:h-[70%]">
          <div className=" h-full  ">
            {appointments ? (
              <TableTeamRow
                appointments={
                  view === 'cancelled' ? cancelledAppointments : appointments
                }
                date={date}
                canceled={view === 'cancelled'}
              />
            ) : (
              <Loader />
            )}
          </div>
        </section>
      )}
    </section>
  )
}
