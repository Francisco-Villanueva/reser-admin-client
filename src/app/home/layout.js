'use client'
import React from 'react'
import Aside from '@/components/Aside'
import Navbar from '@/components/Navbar'
import { DataProvider } from '@/components/provider/data-provider'
import Sidebar from '@/components/Sidebar'
import { useStore } from '@/context/AdminContext'

export default function layout({ children }) {
  const { currentUser } =  useStore()
 
  return (
    <>
    <div className="flex  max-sm:flex-col-reverse max-sm:gap-2">
    
      <Sidebar />
      <div className="w-full flex flex-col  max-h-[100%] px-6   ">
        <Navbar/>

        <div className="max-h-[85vh] h-[85vh]  max-sm:h-[83vh] relative ">
          <DataProvider>
              {children}
          </DataProvider>
          <Aside/>
        </div>
        
      </div>
    </div>
    </>
  )
}
