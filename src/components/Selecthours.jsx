'use client'
import { useStore } from '@/context/AdminContext'
import HourCard from '../commons/HourCard'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import { Button } from './ui/button'

export default function Selecthours({ handleChangeHours }) {
  const { hoursToShow } = useStore()
  const [newHours, setNewHours] = useState([])
  const [deletedHours, setDeletedHours] = useState([])
  const handleSubmit = () => {
    const hoursToUpdate = newHours
      .sort((a, b) => a.position - b.position)
      .map((e) => e.value)

    handleChangeHours(hoursToUpdate)
  }

  useEffect(() => {
    setNewHours(hoursToShow.filter((e) => e.avaliable))
    setDeletedHours([])
  }, [hoursToShow])

  const handleSelect = (newHour) => {
    if (deletedHours.some((h) => h.value === newHour.value)) {
      setDeletedHours((prev) => prev.filter((hs) => hs.value !== newHour.value))
    }
    if (newHours.some((h) => h.value === newHour.value)) {
      if (newHour.avaliable) {
        setDeletedHours((prev) => [...prev, newHour])
      }
      return setNewHours((prev) =>
        prev.filter((hs) => hs.value !== newHour.value),
      )
    }
    setNewHours((prev) => [...prev, newHour])
  }

  return (
    <section className="flex flex-col items-center  gap-4 h-full justify-between ">
      <div className="flex flex-col items-center  gap-4 ">
        <section className="flex gap-6 items-center justify-around text-sm p-2  ">
          {['Nuevo', 'Eliminar ', 'Actual'].map((type) => (
            <div className="flex items-center gap-1 max-sm:text-[10px]">
              <div
                className={`w-3 h-3 max-sm:w-[10px] max-sm:h-[10px] rounded-full ${
                  type === 'Actual'
                    ? 'bg-green'
                    : type === 'Nuevo'
                      ? 'bg-orange-300'
                      : type === 'Eliminar '
                        ? 'bg-error'
                        : 'bg-disabled'
                }`}
              >
                {' '}
              </div>
              <p>{type}</p>
            </div>
          ))}
        </section>
        <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-x-10 gap-y-2 ">
          {hoursToShow ? (
            hoursToShow.map((hour) => (
              <HourCard
                hour={hour}
                isNew={newHours.some((h) => h.value === hour.value)}
                isDeleted={deletedHours.some((h) => h.value === hour.value)}
                onClick={() => handleSelect(hour)}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Button
        variant="outline"
        onClick={handleSubmit}
        className=" w-full  "
        disabled={
          newHours.length === hoursToShow.filter((e) => e.avaliable).length
        }
      >
        Actualizar
      </Button>
    </section>
  )
}
