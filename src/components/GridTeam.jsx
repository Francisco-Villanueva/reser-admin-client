import React from 'react'
import BarberCard from './BarberCard'

export default function GridTeam({ team = [] }) {
  return (
    <div className="grid grid-cols-5 gap-2  w-full max-h-full ">
      {team
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard barber={barber} key={barber.id} />
        ))}
    </div>
  )
}
