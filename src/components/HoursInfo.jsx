import Button from '@/commons/Button'
import { ArrowRight } from '@/commons/Icons'
import useModal from '@/hooks/useModal'
import React, { useEffect, useState } from 'react'
import SelectDay from './SelectDay'
import Selecthours from './Selecthours'
import { ApiServices } from '@/services'
import { useStore } from '@/context/AdminContext'
import FloatingLoader from '@/commons/FloatingLoader'
import LayoutAsideItem from '@/commons/LayoutAsideItem'
import { message } from 'antd'
import { useAsideStore } from '@/context/AsideContext'

export default function HoursInfo() {
  const { setHoursToShow, selectedBarber } = useStore()
  const { setAside } = useAsideStore()
  const [dateIndex, setDateIndex] = useState(new Date().getDay())
  const [loading, setLoading] = useState(false)
  const hoursInfo = useModal()
  useEffect(() => {
    ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
      setHoursToShow(res.data)
    })
  }, [dateIndex])

  const handleDate = (dateI) => {
    setDateIndex(dateI)
  }
  const handleChangeHours = (hoursToUpdate) => {
    setLoading(true)
    ApiServices.updateBarberWorkHours(
      selectedBarber.id,
      dateIndex,
      hoursToUpdate,
    )
      .then(() => {
        ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
          setHoursToShow(res.data)
          setLoading(true)
          message.success('Horarios actualizados!')
        })
      })
      .catch(() => {
        message.error('Error actulizando horarios del peluquero')
        setLoading(false)
      })
  }
  return (
    <>
      <section className="flex flex-col gap-4 p-2 w-full h-full   ">
        <SelectDay handleDate={handleDate} dateIndex={dateIndex} />
        <Selecthours
          dateIndex={dateIndex}
          handleChangeHours={handleChangeHours}
        />
      </section>

      {loading && <FloatingLoader />}
    </>
  )
}
