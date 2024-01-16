import { AdminProvider } from '@/context/AdminContext'
import React from 'react'

export default function Provider({ children }) {
  return <AdminProvider>{children}</AdminProvider>
}
