'use client'
import { LoaderWrapper } from '@/commons/LoaderWrapper'
import { useStore } from '@/context/AdminContext'
import { ApiServices, AppointmentServices, AuthServices } from '@/services'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, PropsWithChildren, useEffect, useState } from 'react'

export function DataProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const {
    currentUser,
    setCurrentUser,
    setBarbers,
    setSelectedBarber,
    setAppointments,
    setFetchingBarbers,
  } = useStore()
  const router = useRouter()
  useEffect(() => {
    const barberId = localStorage.getItem('userId')
    if (!barberId) {
      return router.push('/login')
    }

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await AuthServices.getBarber(barberId)
        const user = response.data
        setCurrentUser(user)
        if (user.isAdmin) {
          setFetchingBarbers(true)
          const barbersRes = await ApiServices.getAllBarbers()
          setBarbers(barbersRes.data)
          setFetchingBarbers(false)
          router.push('/home/admin')
          return
        }

        setSelectedBarber(user)
        router.push('/home/barber')
      } catch (error) {
        console.log('Error fetching user data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    AppointmentServices.getAll().then((res) => {
      setAppointments(res.data)
    })
  }, [])

  if (loading) return <LoaderWrapper />
  return <Fragment>{children}</Fragment>
}
