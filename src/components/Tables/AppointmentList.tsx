'use client'
import { useStore } from '@/context/AdminContext'
import { Appointment } from '@/types'
import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import useDate from '@/hooks/useDate'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Contact } from '@/commons/AppointmentCard'

export default function AppointmentList() {
  const { barbers, appointmentsByDate, dateOfFilter } = useStore()
  const { formatToYMD } = useDate()

  const [listLimit, setListLimit] = useState(4)
  const sortedByDate = appointmentsByDate.toReversed()
  const lastAppoitnments = sortedByDate.slice(
    appointmentsByDate.length - listLimit,
  )
  return (
    <div className="flex flex-col gap-2  max-h-[90%] overflow-auto    w-full h-[90%] ]  ">
      {lastAppoitnments.length ? (
        lastAppoitnments.map((appointment: Appointment) => (
          <section
            className=" flex flex-col gap-4  border border-accent  p-4 rounded-lg"
            key={appointment.id}
          >
            <div className=" flex gap-4 justify-between">
              <div className=" flex-grow">
                <section className="flex flex-col gap-1 ">
                  <p className="font-semibold text-lg">{appointment.name}</p>
                  <hr className="border border-accent w-40" />
                  <p className="font-normal text-sm">{appointment.phone}</p>
                  <p className="font-normal text-sm">{appointment.email}</p>
                </section>
                <p className="my-2 text-sm text-primary/80 font-light">
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
              <section className="flex flex-col items-end ">
                <Badge variant="secondary">
                  <div className="flex items-center">
                    <p className="uppercase text-sm">
                      {formatToYMD(appointment.date)}
                    </p>
                    <p className="font-semibold">{appointment.time}</p>
                  </div>
                </Badge>
              </section>
            </div>
            <section className=" py-2 flex gap-2 justify-end border-t border-accent">
              <Contact phoneNumber={appointment.phone} />
            </section>
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
