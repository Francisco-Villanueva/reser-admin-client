import AppointmentCard from '@/commons/AppointmentCard'
import Button from '@/commons/Button'
import { ArrowLeft } from '@/commons/Icons'
import useDate from '@/hooks/useDate'
import useModal from '@/hooks/useModal'
import { isToday } from 'date-fns'
import React from 'react'

export default function Appoitments({ appointment }) {
  const { date, appointments } = appointment
  const { formatToYMD } = useDate()
  const dayModal = useModal()
  const fechaActual = new Date()
  const fechaProporcionada = new Date(date + 'T00:00:00')
  const isToday =
    fechaActual.getDate() === fechaProporcionada.getDate() &&
    (fechaActual.getMonth() === fechaProporcionada.getMonth()) ===
      (fechaActual.getFullYear() === fechaProporcionada.getFullYear())
  return (
    <div className={` text-black flex flex-col gap-2  `}>
      <section
        className={`${isToday ? 'text-white bg-blue' : ''} flex justify-between items-center p-1 rounded-md`}
      >
        <div>
          <strong className="text-lg ">{formatToYMD(date)}</strong>
        </div>
        <Button
          variant="tex"
          className=" text-[10px] p-1 outline-none mr-1 rounded-md"
          onClick={dayModal.toggleModal}
          disabled={appointments.filter((e) => e.name).length === 0}
        >
          {appointments.filter((e) => e.name).length}
          <ArrowLeft
            className={`text-black w-[10px] m-0 ${dayModal.isModalOpen ? 'rotate-[90deg]' : ' rotate-[-90deg]'} transition-all duration-300`}
          />
        </Button>
      </section>
      {dayModal.isModalOpen && (
        <div className="flex flex-col gap-2 w-[98%]  m-auto border-l-2 pl-2 border-blue">
          {appointments.map((appointment) => (
            <AppointmentCard appointment={appointment} date={date} />
          ))}
        </div>
      )}
    </div>
  )
}
