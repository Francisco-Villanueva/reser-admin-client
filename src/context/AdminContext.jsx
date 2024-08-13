'use client'

import { createContext, useContext, useState } from 'react'
import { userModel } from '@/types'
const initialState = {
  barbers: [],
  horarios: [],
  hoursToShow: [],
  appointments: [],
  dateOfFilter: undefined,
  selectedBarber: { ...userModel },
  selectedDay: {},
  currentUser: { ...userModel },
  setBarbers: (barbers) => {},
  setCurrentUser: () => {},
  setHoursToShow: () => {},
  setSelectedBarber: () => {},
  filterAppointments: (date) => {},
}

export const AdminContext = createContext(initialState)

export function AdminProvider({ children }) {
  const [state, setState] = useState({
    barbers: [],
    horarios: [],
    hoursToShow: [],
    appointments: [],
    appointmentsByDate: [],
    dateOfFilter: undefined,
    selectedBarber: { ...userModel },
    selectedDay: {},
    currentUser: { ...userModel },
  })

  const setAppointments = (appointments) => {
    setState((state) => ({
      ...state,
      appointments,
      appointmentsByDate: appointments,
    }))
  }
  const setDateOfFilter = (dateOfFilter) => {
    setState((state) => ({
      ...state,
      dateOfFilter,
    }))
  }
  const filterAppointments = (date) => {
    const filteredAppointments = date
      ? state.appointments.filter((appointment) => appointment.date === date)
      : state.appointments

    setState((state) => ({
      ...state,
      appointmentsByDate: filteredAppointments,
    }))
  }

  const setCurrentUser = (user) => {
    setState((state) => ({ ...state, currentUser: user }))
  }
  const setBarbers = (barbers) => {
    setState((state) => ({ ...state, barbers }))
  }

  const setHoursToShow = (hoursToShow) => {
    setState((prev) => ({ ...prev, hoursToShow }))
  }
  const setSelectedBarber = (selectedBarber) => {
    setState((prev) => ({ ...prev, selectedBarber }))
  }
  const mainHours = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
  ]

  return (
    <AdminContext.Provider
      value={{
        ...state,
        mainHours,
        setBarbers,
        setHoursToShow,
        setSelectedBarber,
        setCurrentUser,
        setAppointments,
        filterAppointments,
        setDateOfFilter,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useStore = () => useContext(AdminContext)
