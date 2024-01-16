import React from 'react'
import BarberCard from './BarberCard'

export default function GridTeam({ team = [] }) {
  return (
    <div className={`grid grid-cols-3 max-md:grid-cols-1 gap-2 `}>
      {team
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard barber={barber} key={barber.id} />
        ))}
    </div>
  )
}
