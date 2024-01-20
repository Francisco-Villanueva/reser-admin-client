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

export default function HoursInfo({ closeModal }) {
  const { setHoursToShow, selectedBarber } = useStore()
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
    useEffect(() => {
      ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
        setHoursToShow(res.data)
      })
    }, [dateIndex])
    ApiServices.updateBarberWorkHours(
      selectedBarber.id,
      dateIndex,
      hoursToUpdate,
    )
      .then(() => {
        ApiServices.getHoursByDay(selectedBarber.id, dateIndex).then((res) => {
          setHoursToShow(res.data)
          setLoading(true)
          closeModal()
          message.success('Horarios actualizados!')
        })
      })
      .catch(() => {
        message.error('Error actulizando horarios del peluquero')
        setLoading(false)
      })
  }
  return (
    <div className="flex flex-col   ">
      <LayoutAsideItem>
        <h2 className="text-black">Horarios de trabajo</h2>
        <Button onClick={hoursInfo.toggleModal}>
          <ArrowRight
            className={`w-[12px] transition-all duration-200 ${!hoursInfo.isModalOpen ? 'rotate-[90deg]' : 'rotate-[-90deg]'}`}
          />{' '}
        </Button>
      </LayoutAsideItem>
      {hoursInfo.isModalOpen && (
        <section className="flex flex-col gap-4 p-2">
          <SelectDay handleDate={handleDate} dateIndex={dateIndex} />
          <Selecthours
            dateIndex={dateIndex}
            handleChangeHours={handleChangeHours}
          />
        </section>
      )}
      {loading && <FloatingLoader />}
    </div>
  )
}
