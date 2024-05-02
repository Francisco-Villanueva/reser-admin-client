import { AdminProvider } from '@/context/AdminContext'
import { AsideProvider } from '@/context/AsideContext'
import React from 'react'

export default function Provider({ children }) {
  return (
    <AdminProvider>
      <AsideProvider>{children}</AsideProvider>
    </AdminProvider>
  )
}
