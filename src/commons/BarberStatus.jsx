import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function BarberStatus({ status }) {
  const COLORS = {
    active: 'bg-success text-white',
    inactive: 'bg-error text-white',
  }

  return (
    <Badge
      className={`text-xs font-normal py-0 hover:${COLORS[status]} ${COLORS[status]} select-none capitalize`}
    >
      {status}
    </Badge>
  )
}
