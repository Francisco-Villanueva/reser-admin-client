'use client'
import AppointmentsList from '@/components/AppointmentsList'
import { useStore } from '@/context/AdminContext'
import React, { useEffect } from 'react'

export default function BarberPage() {
  const { setSelectedBarber, currentUser } = useStore()
  useEffect(() => {
    setSelectedBarber(currentUser)
  }, [])
  return <AppointmentsList />
}
