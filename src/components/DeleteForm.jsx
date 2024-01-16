'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Input from '@/commons/Input'
import { useStore } from '@/context/AdminContext'
import { ApiServices } from '@/services/workhours.services'
import { message } from 'antd'
import DeleteLayout from '@/commons/DeleteLayout'
import FloatingLoader from '@/commons/FloatingLoader'

export default function DeleteForm({ closeModal, barber = {} }) {
  const { setBarbers } = useStore()
  const [loading, setLoading] = useState(false)

  const handleDelete = () => {
    setLoading(true)

    ApiServices.deleteBarber(barber.id)
      .then((res) => {
        message.info('Peluquero eliminado')
        setLoading(false)

        ApiServices.getAllBarbers().then((res) => setBarbers(res.data))
        closeModal()
      })
      .catch(() => {
        message.error('Error al borrar un nuevo peluquero!')
        setLoading(false)
      })
  }
  return (
    <DeleteLayout closeModal={closeModal} handleDelete={handleDelete}>
      <h2 className="text-blue font-bold text-2xl max-sm:text-lg p-2">
        Eliminar peluquero
      </h2>
      <div>
        <h2 className="text-black font-bold text-lg ">
          Informacion del peluquero
        </h2>

        <div className="flex gap-1   ">
          <div className=" relative flex-1 border rounded-md ">
            <Image src={'/images/barber1.jpg'} fill objectFit="contain" />
          </div>
          <div className="flex flex-[2] flex-col gap-2">
            <Input value={barber.name} title={'Nombre'} />
            <Input value={barber.lastName} title={'Apellido'} />
          </div>
        </div>
      </div>
      {loading && <FloatingLoader />}
    </DeleteLayout>
  )
}
