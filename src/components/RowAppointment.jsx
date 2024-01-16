'use client'
import { PhoneIcon, MailIcon } from '@/commons/Icons'
import useModal from '@/hooks/useModal'
import React from 'react'

export default function RowAppointment({ appointment }) {
  const { openModal, closeModal, isModalOpen } = useModal()

  return (
    <div
      className={`text-sm p-2 ${
        isModalOpen && 'bg-blue text-white'
      } transition-all duration-100`}
    >
      <li
        onClick={isModalOpen ? closeModal : openModal}
        className={`grid grid-cols-3 gap-2 text-sm  cursor-pointer ${
          !isModalOpen && 'hover:text-black'
        } `}
      >
        <span>| {appointment.name}</span>
        <span>{appointment.date}</span>
        <span>{appointment.time}</span>
      </li>
      {isModalOpen && (
        <div className="text w-[90%] m-auto flex flex-col gap-2 my-2">
          <span className="flex gap-2 items-center">
            <PhoneIcon className="h-4" /> {appointment.phone}
          </span>
          <span className="flex gap-2 items-center">
            <MailIcon className="h-4  " /> {appointment.email}
          </span>
        </div>
      )}
    </div>
  )
}
