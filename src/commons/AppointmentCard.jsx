import React from 'react'
import { ArrowLeft, MailIcon, PhoneIcon, TrashIcon } from './Icons'

import { useStore } from '@/context/AdminContext'
import useModal from '@/hooks/useModal'
import DeleteAppointment from '@/components/DeleteAppointment'
import { Button } from '@/components/ui/button'
import { MessageCircleIcon } from 'lucide-react'

export function Contact({ phoneNumber }) {
  const whatsappURL = `https://wa.me/+54${phoneNumber}`
  return (
    <a
      href={whatsappURL}
      className="flex items-center gap-2 text-xs border-accent border px-2 rounded-md hover:bg-green/75 transition-all duration-300"
    >
      <span>Enviar mensaje</span>
      <MessageCircleIcon className="w-4" />
    </a>
  )
}

export default function AppointmentCard({ appointment, canceled = false }) {
  const { name, email, phone, hour, id, date } = appointment
  const { currentUser } = useStore()
  const { openModal, isModalOpen, closeModal } = useModal()
  const inforModal = useModal()

  return (
    <div
      className={`flex-col items-start justify-between   rounded-md p-1  lg:items-center   gap-8  max-md:gap-2  border border-border transition-all duration-200 ${name && 'bg-secondary/25'}`}
    >
      <div className="flex  items-center justify-between   w-full  ">
        <section
          className={` text-sm    ${name && 'font-semibold'}    max-lg:p-1`}
        >
          <div className="flex gap-1">
            <p>{hour}</p>
            <p>{name}</p>
          </div>
        </section>

        <section className=" h-10">
          {name && (
            <section className="flex gap-2">
              <Button
                variant="outline"
                onClick={inforModal.toggleModal}
                size="sm"
              >
                <ArrowLeft
                  className={`text-black w-[14px] ${inforModal.isModalOpen ? 'rotate-[90deg]' : ' rotate-[-90deg]'} transition-all duration-150`}
                />
              </Button>

              {currentUser.isAdmin && !canceled && (
                <Button variant="destructive" onClick={openModal} size="sm">
                  <TrashIcon className={'w-4  '} />
                </Button>
              )}
            </section>
          )}
        </section>
      </div>

      {inforModal.isModalOpen && (
        <div className="flex flex-col gap-1 text-sm ml-4 items-start ">
          <div className="flex gap-4 items-center">
            <p className="flex gap-1">
              <PhoneIcon className="w-3" />
              {phone}
            </p>
            <Contact phoneNumber={phone} />
          </div>

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
