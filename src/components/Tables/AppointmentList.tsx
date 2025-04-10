'use client'
import { useStore } from '@/context/AdminContext'
import { Appointment } from '@/types'
import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import useDate from '@/hooks/useDate'
import Image from 'next/image'
import { Contact } from '@/commons/AppointmentCard'

export default function AppointmentList() {
  const { barbers, appointmentsByDate, dateOfFilter } = useStore()
  const { formatToYMD } = useDate()

  const [listLimit, setListLimit] = useState(15)
  const lastAppoitnments = appointmentsByDate.slice(
    appointmentsByDate.length - listLimit,
  )
  return (
    <div className="flex flex-col gap-2  max-h-[90%] h-[90%] md:overflow-auto    w-full    ">
      <p className="text-gray-500 font-medium">
        {' '}
        Ultimos {lastAppoitnments.length} turnos agendados{' '}
      </p>
      {lastAppoitnments.length ? (
        lastAppoitnments.map((appointment: Appointment) => (
          <section
            className=" flex flex-col gap-2  border border-border  p-2 rounded-lg"
            key={appointment.id}
          >
            <div className=" flex max-md:flex-col gap- justify-between ">
              <div className=" flex-grow">
                <p className="font-semibold text-lg">{appointment.name}</p>
                <p className="text-sm text-gray-600 ">
                  Nuevo turno agenadado 🎉 con{' '}
                  <strong className="font-bold text-primary/90">
                    {
                      barbers.find(
                        (barber) => barber.id === appointment.barberId,
                      )?.name
                    }
                    .
                  </strong>
                </p>
              </div>
              <section className="flex flex-col gap-2 items-end ">
                <Badge variant="secondary">
                  <div className="flex items-center gap-2">
                    <p className=" ">{formatToYMD(appointment.date)}</p>
                    <p className="">{appointment.time}</p>
                  </div>
                </Badge>
                <Contact phoneNumber={appointment.phone} />
              </section>
            </div>
          </section>
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
