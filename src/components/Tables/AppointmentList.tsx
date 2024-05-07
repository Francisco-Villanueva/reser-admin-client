import AppointmentCard from '@/commons/AppointmentCard'
import { useStore } from '@/context/AdminContext'
import { Appointment } from '@/types'
import React from 'react'
import { Badge } from '../ui/badge'
import useDate from '@/hooks/useDate'
import Image from 'next/image'

export default function AppointmentList() {
  const { barbers, appointmentsByDate, dateOfFilter } = useStore()
  const { formatToYMD } = useDate()
  return (
    <div className="flex flex-col gap-2  max-h-[90%] overflow-auto    w-full h-[90%]  ">
      {appointmentsByDate.length ? (
        appointmentsByDate.map((appointment: Appointment) => (
          <div className="border border-border p-1 flex items-center justify-between">
            <section className="flex gap-1">
              <p className="font-semibold">{appointment.time}</p>
              <p className="font-light">{appointment.name}</p>
            </section>

            <section>
              <Badge>
                {
                  barbers.find((barber) => barber.id === appointment.barberId)
                    ?.name
                }
              </Badge>
              <p className="uppercase text-sm">
                {formatToYMD(appointment.date)}
              </p>
            </section>
          </div>
        ))
      ) : (
        <div className="h-full w-full bg-accent flex flex-col gap-4 justify-center items-center">
          <div className="h-1/2 aspect-video relative">
            <Image
              src={'/notFound.png'}
              fill
              alt="reset"
              className="fill-teal-50"
            />
          </div>

          <span className="font-extralight italic text-sm">
            No hay turnos encontrados para la fecha: {dateOfFilter}
          </span>
        </div>
      )}
    </div>
  )
}
