import React from 'react'
import { ArrowLeft, MailIcon, PhoneIcon, TrashIcon } from './Icons'
import Button from './Button'
import { useStore } from '@/context/AdminContext'
import useModal from '@/hooks/useModal'
import DeleteAppointment from '@/components/DeleteAppointment'

export default function AppointmentCard({ appointment }) {
  const { name, email, phone, hour, id, date } = appointment
  const { currentUser } = useStore()
  const { openModal, isModalOpen, closeModal } = useModal()
  const inforModal = useModal()

  return (
    <div className="flex-col items-start justify-between  rounded-md p-1  lg:items-center   gap-8  max-md:gap-2  border  ">
      <div className="flex  items-center justify-between   w-full  ">
        <section className={` text-sm  font-semibold     max-lg:p-1`}>
          <div className="flex gap-1">
            <strong>{hour}</strong>
            <p>{name}</p>
          </div>
        </section>

        <section className="flex gap-2">
          <Button variant="text" onClick={inforModal.toggleModal}>
            <ArrowLeft
              className={`text-black w-[14px] ${inforModal.isModalOpen ? 'rotate-[90deg]' : ' rotate-[-90deg]'} transition-all duration-150`}
            />
          </Button>

          {currentUser.isAdmin && (
            <Button
              onClick={openModal}
              className="   bg-error hover:bg-red-700 text-white   rounded-md p-1 z-40"
            >
              <TrashIcon className={'w-4  '} />
            </Button>
          )}
        </section>
      </div>

      {inforModal.isModalOpen && (
        <div className="flex flex-col gap-1 text-sm ml-4 ">
          <p className="flex gap-1">
            <PhoneIcon className="w-3" /> {phone}
          </p>
          <p className="flex gap-1">
            <MailIcon className="w-3" /> {email}
          </p>
        </div>
      )}
      {isModalOpen && (
        <DeleteAppointment
          appointmentId={id}
          modal={{ closeModal, openModal, isModalOpen }}
        />
      )}
    </div>
  )
}
