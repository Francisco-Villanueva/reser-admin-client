import { useStore } from '@/context/AdminContext'
import React, { useState } from 'react'
import BarberCard from '../BarberCard'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import AsideBackground from './AsideBackground'
import { ApiServices } from '@/services'
import { message } from 'antd'
import { useAsideStore } from '@/context/AsideContext'
import Loader from '../Loader'

export default function DeleteMemberAside() {
  const { selectedBarber, setBarbers } = useStore()
  const { setAside } = useAsideStore()
  const [loading, setLoading] = useState(false)

  const handleDeleteMember = async () => {
    try {
      await ApiServices.deleteBarber(selectedBarber.id)
      const barbers = await ApiServices.getAllBarbers()
      setBarbers(barbers.data)
      message.info(`Peluquero Eliminado!`)
      setAside(undefined)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col gap-20 justify-between   h-full">
      <AsideBackground />
      <div className=" flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-xl">Borrar Miembro del equipo RESET</h2>
          <p className="text-primary/80 font-light">
            El miembro va seleccionado va a ser borrado de forma permanente
          </p>
        </header>
        <hr className="border border-accent " />
        <h2>
          Estas seguro que queres eliminar a{' '}
          <strong>
            {selectedBarber.name} {selectedBarber.lastName}
          </strong>{' '}
          ?
        </h2>

        <BarberCard barber={selectedBarber} readonly />
      </div>
      <section className="p-2  w-fullrounded-md bottom-0 flex justify-end">
        <Button
          variant="destructive"
          disabled={loading}
          onClick={handleDeleteMember}
        >
          {loading ? <Loader /> : 'Eliminar'}
        </Button>
      </section>
    </div>
  )
}
