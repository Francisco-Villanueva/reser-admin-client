'use client'

import BarberStatus from '@/commons/BarberStatus'
import MemberDropDown from './Dropdowns/MemberDropDown'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function BarberCard({ barber }) {
  const { theme } = useTheme()

  const resetLogo =
    theme === 'light' ? '/images/RESET_C_negro.png' : '/images/RESET_C.png'
  return (
    <div className=" flex flex-col  gap-2 items-center border border-border rounded-md    ">
      <header className="h-20  w-full relative flex justify-center items-center">
        <div className="h-1/2 bg-secondary top-0 w-full flex items-center absolute ">
          <div className="absolute left-1">
            <BarberStatus status={barber.status} />
          </div>
          <div className="absolute right-1">
            <MemberDropDown member={barber} />
          </div>
        </div>
        <div className="h-1/2 bg w-full bottom-0  absolute"></div>
        <div className="h-5/6 aspect-square relative ">
          <Image
            src={barber.img ? barber.img : resetLogo}
            objectFit="cover"
            fill
            className=" rounded-full bg-secondary p-1"
          />
        </div>
      </header>
      <section className="flex  flex-col gap-2 pb-4  ">
        <h2 className="font-semibold text-primary/85">
          {barber.name} {barber.lastName}
        </h2>

        <div className="text-xs">
          <p>{barber.email}</p>
        </div>
      </section>
    </div>
  )
}
