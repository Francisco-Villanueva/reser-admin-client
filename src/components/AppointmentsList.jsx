import { useStore } from '@/context/AdminContext'
import React, { useEffect, useState } from 'react'
import TableTeamRow from './TableTeamRow'
import Loader from './Loader'
import Calendar from './Calendar'
import { AppointmentServices } from '@/services'
import Button from '@/commons/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
export default function AppointmentsList() {
  const {
    selectedBarber: { appointments, id },
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
      className={
        'flex flex-col gap-4   max-sm:gap-2 overflow-auto border-none p-0 '
      }
    >
      <section className="flex   items-center gap-2">
        <h2 className="text-black font-semibold max-md:text-xs">
          ¿Qué turnos deseas ver?
        </h2>
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
      </section>
      {view === 'appointments' && (
        <div className="flex flex-col gap-4">
          {appointments && (
            <Calendar handleDate={(date) => setDate(date)} selectedDay={date} />
          )}
          {appointments ? (
            <TableTeamRow appointments={appointments} date={date} />
          ) : (
            <Loader />
          )}
        </div>
      )}
      {view === 'cancelled' && (
        <div className="flex flex-col gap-4  text-dark-grey ">
          {cancelledAppointments && (
            <Calendar
              handleDate={(date) => setDate(date)}
              selectedDay={date}
              canceled={true}
            />
          )}

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
  )
}
