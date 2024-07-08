import DeleteLayout from '@/commons/DeleteLayout'
import Ticket from '@/commons/Ticket'
import TitleView from '@/commons/TitleView'
import { useStore } from '@/context/AdminContext'
import { AppointmentServices, AuthServices } from '@/services'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { message } from 'antd'

export default function DeleteAppointment({ modal, appointmentId }) {
  const [appointment, setAppointment] = useState({
    id: '',
    name: '',
    date: '',
    time: '',
  })
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    AppointmentServices.getById(appointmentId)
      .then((res) => {
        setAppointment(res.data)
      })
      .finally(() => setLoading(false))
  }, [appointmentId])

  const { currentUser, setCurrentUser, setSelectedBarber, selectedBarber } =
    useStore()
  const handleDeleteAppointment = () => {
    AppointmentServices.delete(appointment.id).then(() => {
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
    <DeleteLayout
      closeModal={modal.closeModal}
      handleDelete={handleDeleteAppointment}
    >
      <div className=" h-full w-[90%] flex flex-col justify-center">
        <TitleView>Eliminar Turno</TitleView>
        {loading ? (
          <Loader />
        ) : (
          <div className="h-full  flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col mx-auto w-2/3 gap-1 ">
              <span className="flex justify-between  w-full">
                <span>Nombre</span>
                <span>{appointment.name}</span>
              </span>
              <span className="flex justify-between  w-full">
                <span>Dia</span>
                <span>{appointment.date}</span>
              </span>
              <span className=" flex justify-between  w-full">
                <span>Hora</span>
                <span>{appointment.time} hs</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </DeleteLayout>
  )
}
