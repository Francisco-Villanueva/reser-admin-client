import React from 'react'

export default function BarberStatus({ status }) {
  const COLORS = {
    active: 'bg-success',
    inactive: 'bg-error',
  }

  return (
    <div
      className={`  ${COLORS[status]} rounded-[3px] w-[5px] h-[1rem] `}
    ></div>
  )
}
