import useDate from '@/hooks/useDate'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
export default function SelectDay({ handleDate, dateIndex }) {
  const { weeksDays } = useDate()

  return (
    <Tabs
      defaultValue={dateIndex}
      className="w-full justify-center gap-2 flex "
    >
      {weeksDays.map((day, index) => (
        <TabsList className="rounded-none p-0 py-0 border border-border ">
          <TabsTrigger
            className="h-full rounded-none"
            value={index + 2}
            onClick={() => handleDate(index + 2)}
          >
            {day}
          </TabsTrigger>
        </TabsList>
      ))}
    </Tabs>
  )
}
