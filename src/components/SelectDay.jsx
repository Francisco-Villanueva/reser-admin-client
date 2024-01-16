import Button from '@/commons/Button'
import { useStore } from '@/context/AdminContext'
import useDate from '@/hooks/useDate'
import { ApiServices } from '@/services/workhours.services'
import React, { useEffect, useState } from 'react'

export default function SelectDay({ handleDate, dateIndex }) {
  const { weeksDays } = useDate()

  return (
    <div className="grid grid-cols-5 ">
      {weeksDays.map((day, index) => (
        <Button
          variant={index + 2 === dateIndex ? 'secondary' : 'text'}
          size={'small'}
          className="rounded-md"
          onClick={() => handleDate(index + 2)}
        >
          {day}
        </Button>
      ))}
    </div>
  )
}
