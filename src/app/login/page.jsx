'use client'
import LoginForm from '@/components/Login/LoginForm'
import { useStore } from '@/context/AdminContext'
import { useTheme } from 'next-themes'

import Image from 'next/image'
import React, { useEffect } from 'react'

export default function LoginPage() {
  const { setCurrentUser } = useStore()
  const { theme } = useTheme()
  useEffect(() => {
    localStorage.clear()
    setCurrentUser(null)
  }, [])

  return (
    <section className="   h-[100vh] w-[100vw] flex flex-col overflow-hidden  ">
      <div className="  flex  lg:items-center h-full flex-grow max-lg:flex-col">
        <section className="  w-full h-1/3 lg:w-1/2 lg:h-full flex flex-col gap-8 lg:gap-16 items-center justify-center relative ">
          <div className="bg-dark-grey/30 h-1/2 w-1/2 max-lg:h-24 max-lg:w-24 rounded-br-full top-0 left-0 absolute"></div>
          <div className="bg-dark-grey/30 h-1/6 w-1/6 max-lg:h-24 max-lg:w-24  rounded-tl-full  bottom-0 right-0 absolute "></div>

          <Image
            className="max-lg:w-[250px] z-10"
            src={
              theme === 'light'
                ? '/images/RESET_L _dark.png'
                : '/images/RESET_L_light.png'
            }
            width={350}
            height={50}
            alt="Reset Hair Studio"
          />
          <h2 className="uppercase  text-primary/80 z-10">
            Welcome to <span className="font-bold"> reset Software</span>{' '}
            Backoffice
          </h2>
        </section>

        <section className=" w-full h-2/3 lg:w-1/2 lg:h-full flex items-center  justify-center lg:bg-dark-grey/0 relative  ">
          <div className="bg-dark-grey/30 h-1/6 w-1/6 max-lg:h-24 max-lg:w-24  rounded-bl-full  top-0 right-0 absolute "></div>
          <div className="bg-dark-grey/30 h-1/6 w-1/6 max-lg:h-24 max-lg:w-24  rounded-tr-full  bottom-0 left-0 absolute "></div>
          <LoginForm />
        </section>
      </div>
    </section>
  )
}
