import Button from '@/commons/Button'
import { useStore } from '@/context/AdminContext'
import useDate from '@/hooks/useDate'
import { ApiServices } from '@/services/workhours.services'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
export default function SelectDay({ handleDate, dateIndex }) {
  const { weeksDays } = useDate()

  return (
    <>
      <Tabs defaultValue={dateIndex} className="w-full">
        {weeksDays.map((day, index) => (
          <TabsList>
            <TabsTrigger
              value={index + 2}
              onClick={() => handleDate(index + 2)}
            >
              {day}
            </TabsTrigger>
          </TabsList>
        ))}
      </Tabs>
    </>
  )
}
