import React from 'react'
import BarberCard from './BarberCard'
import { useStore } from '@/context/AdminContext'
import Loader from './Loader'

export default function GridTeam() {
  const { barbers, fetchingBarbers } = useStore()

  if (fetchingBarbers)
    return (
      <div className="flex flex-col text-gray-500 gap-2 text-sm justify-center items-center h-full w-full p-8 bg-black/5 rounded-lg">
        <Loader />
        <p>Cargando peluqueros</p>
      </div>
    )
  return (
    <div className="grid grid-cols-5 gap-2 max-lg:grid-cols-3 max-md:grid-cols-1  w-full max-h-full ">
      {barbers
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard barber={barber} key={barber.id} />
        ))}
    </div>
  )
}
