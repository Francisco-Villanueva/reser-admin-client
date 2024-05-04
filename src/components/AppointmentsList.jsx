import { useStore } from '@/context/AdminContext'
import React, { useEffect, useState } from 'react'
import TableTeamRow from './TableTeamRow'
import Loader from './Loader'
import Calendar from './Calendar'
import { AppointmentServices } from '@/services'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
export default function AppointmentsList() {
  const {
    selectedBarber: { appointments, id, isAdmin },
  } = useStore()
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [view, setView] = useState('appointments')
  const [cancelledAppointments, setCancelledAppointments] = useState([])

  useEffect(() => {
    if (id)
      AppointmentServices.getCancelled({ barberId: id }).then((res) => {
        setCancelledAppointments(res.data)
      })
  }, [id])
  return (
    <section
      className={`flex flex-col gap-4    max-sm:gap-2    py-2  h-[95%]  max-lg:h-[90%]  max-sm:h-[90%] `}
    >
      <section className="flex max-lg:flex-col   lg:items-center gap-2">
        <div className="flex gap-2">
          <Tabs defaultValue="appointments" className="w-[400px]">
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

        <div>
          {appointments && view === 'appointments' && (
            <Calendar handleDate={(date) => setDate(date)} selectedDay={date} />
          )}
          {cancelledAppointments && view === 'cancelled' && (
            <Calendar
              handleDate={(date) => setDate(date)}
              selectedDay={date}
              canceled={true}
            />
          )}
        </div>
      </section>

      <section className="h-[80%] max-lg:h-[70%]">
        {view === 'appointments' && (
          <div className=" w-full  overflow-auto  gap-4 max-h-[100%]   max-sm:h-[100%]  ">
            {appointments ? (
              <TableTeamRow appointments={appointments} date={date} />
            ) : (
              <Loader />
            )}
          </div>
        )}
        {view === 'cancelled' && (
          <div className="flex flex-col gap-4   ">
            {appointments ? (
              <TableTeamRow
                appointments={cancelledAppointments}
                date={date}
                canceled={true}
              />
            ) : (
              <Loader />
            )}
          </div>
        )}
      </section>
    </section>
  )
}
