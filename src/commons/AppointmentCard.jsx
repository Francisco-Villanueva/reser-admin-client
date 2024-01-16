import React from 'react'
import {
  ArrowLeft,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  TableDisplayIcon,
  TrashIcon,
} from './Icons'
import Ticket from './Ticket'
import Button from './Button'
import { message } from 'antd'
import { AppointmentServices, AuthServices } from '@/services'
import { useStore } from '@/context/AdminContext'
import useModal from '@/hooks/useModal'
import DeleteLayout from './DeleteLayout'
import TitleView from './TitleView'
import useDate from '@/hooks/useDate'

export default function AppointmentCard({ appointment, date }) {
  const { name, email, phone, hour, id } = appointment

  const { currentUser, setCurrentUser, setSelectedBarber, selectedBarber } =
    useStore()
  const { openModal, isModalOpen, closeModal } = useModal()
  const inforModal = useModal()
  const handleDeleteAppointment = () => {
    AppointmentServices.delete(id).then(() => {
      AuthServices.getBarber(
        currentUser.isAdmin ? selectedBarber.id : currentUser.id,
      ).then((res) => {
        currentUser.isAdmin
          ? setSelectedBarber(res.data)
          : setCurrentUser(res.data)
        message.info(`Turno eliminado`)
        closeModal()
      })
    })
  }

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
        <DeleteLayout
          closeModal={closeModal}
          handleDelete={handleDeleteAppointment}
        >
          <div className=" h-full w-[90%] flex flex-col justify-center">
            <TitleView>Eliminar Turno</TitleView>
            <div className="h-full  flex flex-col gap-4 justify-center items-center">
              <h2 className="text-black font-semibold text-xl">{name}</h2>

              <div className="flex flex-col w-2/3 gap-1 ">
                <span className="grid grid-cols-2 ">
                  <strong>Día</strong>
                  <Ticket variant="secondary">{date}</Ticket>
                </span>
                <span className="grid grid-cols-2 ">
                  <strong>Hora</strong>
                  <Ticket variant="secondary">{hour} hs</Ticket>
                </span>
              </div>
            </div>
          </div>
        </DeleteLayout>
      )}
    </div>
  )
}
