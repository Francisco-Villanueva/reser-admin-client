import { AdminProvider } from '@/context/AdminContext'
import { AsideProvider } from '@/context/AsideContext'
import React from 'react'
import { ThemeProvider } from './ThemeProvider'

export default function Provider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AdminProvider>
        <AsideProvider>{children}</AsideProvider>
      </AdminProvider>
    </ThemeProvider>
  )
}
